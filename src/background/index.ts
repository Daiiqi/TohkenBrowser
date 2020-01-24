import { requestType } from './states/requestType';

import { browserWindow, gameTitle, gameURL, handbookWindow } from '../constants';
import { contentRequest } from '../content/states/contentRequest';
import { clickExtensionButton } from './models/clickExtensionButton';
import { getWindowId } from './models/getWindowId';
import { muteWindow } from './models/muteWindow';
import { openLinkOnTab } from './models/openLinkOnTab';
import { popupWindow } from './models/popupWindow';
import { removeWindow } from './models/removeWindow';
import { removeWindowId } from './models/removeWindowId';
import { screenshot } from './models/screenshot';
import { sendMessageToWindow } from './models/sendMessageToWindow';
import { getWindowTabId } from './models/getWindowTabId';

// ブラウザアイコンクリック時の動作
chrome.browserAction.onClicked.addListener(clickExtensionButton);

chrome.contextMenus.create({
  title: '刀剣専覧初期化',
  contexts: ['browser_action'],
  onclick: () => {
    chrome.storage.local.clear(() => {
      alert('刀剣乱舞専用ブラウザをリセットしました。\n＊ゲームへの影響はありません。');
    });
  },
});

// ブラウザウィンドウの削除検出
chrome.windows.onRemoved.addListener(async (windowId: number) => {
  // console.log('onClosingId', windowId);
  const browserId: number = await getWindowId(`${browserWindow}Id`);
  const handbookId: number = await getWindowId(`${handbookWindow}Id`);
  // console.log('browser', browserId);
  // console.log('handbook', handbookId);
  if (windowId === browserId) {
    devConnected = false;
    removeWindowId(`${browserWindow}Id`);
    // console.log(`remove browser? ${await removeBrowserId()}`);
  } else if (windowId === handbookId) {
    removeWindowId(`${handbookWindow}Id`);
  }
});

// DevToolsを介してブラウザの通信内容取得
let devConnected: boolean = false;
chrome.runtime.onConnect.addListener((port: chrome.runtime.Port) => {
  if (port.name !== 'devtools') return;
  // console.log('Connected with devtools!');
  // console.log('portName in bg :', backgroundPortName);

  // devtoolsから通信情報を取得
  port.onMessage.addListener(async (responseJson) => {
    // Received message from devtools. Do something:
    // console.log('responseBody', responseJson);
    // 接続状態の確認
    if (responseJson.targetPageUrl) {
      // console.log('targetURL in bg ', responseJson.targetPageUrl);
      devConnected = (responseJson.targetPageUrl === gameURL);
    }
    // 通信内容をJson形式で送信
    sendMessageToWindow(await getWindowTabId(gameTitle), contentRequest.requestJson, responseJson);
  });

  // devtoolsの切断検出
  port.onDisconnect.addListener(async () => {
    sendMessageToWindow(await getWindowTabId(gameTitle), contentRequest.disconnected);
    devConnected = false;
  });
});

// ContentScriptからのメッセージ取得
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.type) {
    case requestType.muteChange:
      muteWindow(request.payload);
      break;
    case requestType.screenshot:
      screenshot(sender, request.payload);
      break;
    case requestType.getCurrentWindowId:
      if (sender.tab) {
        sendResponse(sender.tab.windowId);
      }
      break;
    case requestType.getDevConnectState:
      if (sender.tab) {
        // console.log('check devConnect in bg ', devConnected);
        sendResponse(devConnected);
      }
      break;
    case requestType.responseBody:
    // console.log('message from devtool');
    case requestType.openLinkOnTab:
      if (sender.tab) {
        openLinkOnTab(sender.tab.windowId, request.payload);
      }
      break;
    case requestType.createHandbookWindow:
      // createHandbookWindow();
      popupWindow.createWindow(
        handbookWindow,
        chrome.extension.getURL('html/handbook.html'),
      );
      break;
    case requestType.closeHandbookWindow:
      // console.log('hdWindow: ', await getWindowId(`${handbookWindow}Id`));
      removeWindow(await getWindowId(`${handbookWindow}Id`));
      break;
    default:
      break;
  }
});
