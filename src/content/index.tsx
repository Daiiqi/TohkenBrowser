import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Content from './components/Content';
import store from './store';

import { getBrowserId } from '../background/models/getBrowserId';
import { windowBeforeUnloadEvent } from './models/windowBeforeUnloadEvent';
import { windowLoadEvent } from './models/windowLoadEvent';

import { analyseJson } from './models/analyseJson';
import { getCurrentWindowId } from './models/getCurrentWindowId';
import { setWindowTitle } from './models/setWindowTitle';

// 終了直前の処理
window.onbeforeunload = () => {
  windowBeforeUnloadEvent();
};

// Jsonデータ取得
chrome.runtime.onMessage.addListener((responseJson: any) => {
  // console.log('Get responseJson!');
  analyseJson(responseJson, (store.getState()).responseJson);
});
/*
// storage変更情報取得
chrome.storage.onChanged.addListener((changes, areaName) => {
  console.log('onChangeEve %O', changes);
});
*/
const startReactDom = async () => {
  const browserId: number = await getBrowserId();
  // console.log(`browserId from strage ${browserId}`);
  const currentWindowId: number = await getCurrentWindowId();
  if (browserId === currentWindowId) {
    setWindowTitle(document);
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<Provider store={store}><Content /></Provider>, app);
    // 過去の値を反映
    windowLoadEvent();
  } else {
    alert('専用ブラウザはブラウザアイコンから開いてください');
  }
};

startReactDom();
