// 刀剣専覧関連
export const twitterURL: string = 'https://twitter.com/TohkenBrowser';

// ブラウザ側設定
export const gameURL: string = 'http://pc-play.games.dmm.com/play/tohken/';
export const gameTitle: string = `刀剣専覧 ${chrome.runtime.getManifest().version} -刀剣乱舞専用ブラウザ-`;
export const gameSize: any = { width: 1030, height: 580 };
export const gameRatio: number = gameSize.height / gameSize.width;
export const handbookTitle: string = `便利帳 ${gameTitle}`;

// 表示系設定
export const headerMenuHeight: number = 65;
export const statusViewHeight: number = 300;

// ゲーム内定数
export const browserWindow = 'browserWindow';
export const handbookWindow = 'handbookWindow';

export const partyNo = 4;
export const partyMemberNo = 6;
export const forgeNo = 4;
export const repairNo = 4;

export const statusLabel = {
  none: '',
  hp: '生存',
  atk: '打撃',
  def: '統率',
  mobile: '機動',
  back: '衝力',
  scout: '偵察',
  hide: '隠蔽',
  loyalties: '必殺',
  fatigue: '英気',
  amulet: '御守',
};

export const forgeColorName = {
  20: 'navy',
  25: 'darkgreen',
  30: 'olive',
  40: 'limegreen',
  90: 'greenyellow',
  150: 'chartreuse',
  180: 'goldenrod',
  200: 'gold',
  240: 'crimson',
  300: 'red',
  360: 'ghostwhite',
  601: 'purple',
};

export const equipStatus = {
  0: {
    name: '不明',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  1: {
    name: '投石兵・並',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 1,
    hide: 1,
  },
  2: {
    name: '投石兵・上',
    soldier: 9,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 2,
  },
  3: {
    name: '投石兵・特上',
    soldier: 10,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 3,
    hide: 3,
  },
  4: {
    name: '槍兵・並',
    soldier: 7,
    atk: 0,
    def: 0,
    mobile: 1,
    back: 2,
    scout: 0,
    hide: 0,
  },
  5:
  {
    name: '槍兵・上',
    soldier: 7,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 3,
    scout: 0,
    hide: 0,
  },
  6: {
    name: '槍兵・特上',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 3,
    back: 5,
    scout: 0,
    hide: 0,
  },
  7: {
    name: '軽歩兵・並',
    soldier: 8,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 1,
  },
  8: {
    name: '軽歩兵・上',
    soldier: 9,
    atk: 0,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 2,
  },
  9: {
    name: '軽歩兵・特上',
    soldier: 10,
    atk: 0,
    def: 0,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 3,
  },
  10: {
    name: '重歩兵・並',
    soldier: 10,
    atk: 1,
    def: 2,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11: {
    name: '重歩兵・上',
    soldier: 11,
    atk: 2,
    def: 2,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  12: {
    name: '重歩兵・特上',
    soldier: 12,
    atk: 3,
    def: 5,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  13: {
    name: '盾兵・並',
    soldier: 11,
    atk: 0,
    def: 5,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  14: {
    name: '盾兵・上',
    soldier: 13,
    atk: 0,
    def: 7,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  15: {
    name: '盾兵・特上',
    soldier: 15,
    atk: 0,
    def: 10,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  16: {
    name: '軽騎兵・並',
    soldier: 9,
    atk: 1,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 0,
  },
  17: {
    name: '軽騎兵・上',
    soldier: 10,
    atk: 2,
    def: 1,
    mobile: 3,
    back: 0,
    scout: 0,
    hide: 0,
  },
  18: {
    name: '軽騎兵・特上',
    soldier: 12,
    atk: 3,
    def: 3,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 0,
  },
  19: {
    name: '重騎兵・並',
    soldier: 11,
    atk: 1,
    def: 3,
    mobile: 0,
    back: 1,
    scout: 0,
    hide: 0,
  },
  20: {
    name: '重騎兵・上',
    soldier: 12,
    atk: 2,
    def: 3,
    mobile: 1,
    back: 2,
    scout: 0,
    hide: 0,
  },
  21: {
    name: '重騎兵・特上',
    soldier: 13,
    atk: 3,
    def: 5,
    mobile: 3,
    back: 3,
    scout: 0,
    hide: 0,
  },
  22: {
    name: '精鋭兵・並',
    soldier: 11,
    atk: 0,
    def: 2,
    mobile: 2,
    back: 0,
    scout: 1,
    hide: 1,
  },
  23: {
    name: '精鋭兵・上',
    soldier: 12,
    atk: 0,
    def: 3,
    mobile: 3,
    back: 0,
    scout: 2,
    hide: 2,
  },
  24: {
    name: '精鋭兵・特上',
    soldier: 13,
    atk: 0,
    def: 5,
    mobile: 5,
    back: 0,
    scout: 3,
    hide: 3,
  },
  25: {
    name: '弓兵・並',
    soldier: 6,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 2,
  },
  26: {
    name: '弓兵・上',
    soldier: 7,
    atk: 1,
    def: 0,
    mobile: 0,
    back: 1,
    scout: 0,
    hide: 3,
  },
  27: {
    name: '弓兵・特上',
    soldier: 8,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 3,
    scout: 0,
    hide: 5,
  },
  28: {
    name: '銃兵・並',
    soldier: 5,
    atk: 0,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 0,
  },
  29: {
    name: '銃兵・上',
    soldier: 6,
    atk: 1,
    def: 0,
    mobile: 0,
    back: 1,
    scout: 3,
    hide: 0,
  },
  30: {
    name: '銃兵・特上',
    soldier: 6,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 3,
    scout: 5,
    hide: 0,
  },
  31: {
    name: '投豆兵・並',
    soldier: 8,
    atk: 2,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 1,
    hide: 1,
  },
  32: {
    name: '投豆兵・上',
    soldier: 9,
    atk: 3,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 2,
    hide: 2,
  },
  33: {
    name: '投豆兵・特上',
    soldier: 12,
    atk: 6,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 3,
    hide: 3,
  },
  10001: {
    name: '01王庭',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 7,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10002: {
    name: '02三国黒',
    soldier: 0,
    atk: 0,
    def: 3,
    mobile: 10,
    back: 3,
    scout: 0,
    hide: 0,
  },
  10003: {
    name: '03松風',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 13,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10004: {
    name: '04小雲雀',
    soldier: 0,
    atk: 0,
    def: 2,
    mobile: 17,
    back: 0,
    scout: 2,
    hide: 2,
  },
  10005: {
    name: '05高盾黒',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 13,
    back: 3,
    scout: 0,
    hide: 0,
  },
  10006: {
    name: '06花柑子',
    soldier: 0,
    atk: 0,
    def: 3,
    mobile: 15,
    back: 0,
    scout: 0,
    hide: 0,
  },
  10007: {
    name: '07青海波',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 13,
    back: 0,
    scout: 3,
    hide: 2,
  },
  10008: {
    name: '08望月',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 17,
    back: 0,
    scout: 0,
    hide: 2,
  },
  11011: {
    name: '白毛',
    soldier: 0,
    atk: 0,
    def: 0,
    mobile: 5,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11021: {
    name: '鹿毛',
    soldier: 0,
    atk: 3,
    def: 0,
    mobile: 2,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11031: {
    name: '青毛',
    soldier: 0,
    atk: 5,
    def: 0,
    mobile: 0,
    back: 0,
    scout: 0,
    hide: 0,
  },
  11041: {
    name: '祝一号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11042: {
    name: '祝一号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11043: {
    name: '祝三号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
  11044: {
    name: '祝四号',
    soldier: 0,
    atk: 2,
    def: 2,
    mobile: 2,
    back: 2,
    scout: 2,
    hide: 2,
  },
};

export const swordName = {
  0: '不明',
  3: '三日月宗近',
  4: '三日月宗近・極',
  5: '小狐丸',
  6: '小狐丸・極',
  7: '石切丸',
  8: '石切丸・極',
  9: '岩融',
  10: '岩融・極',
  11: '今剣',
  12: '今剣・極',
  13: '大典太光世',
  14: '大典太光世・極',
  15: 'ソハヤノツルキ',
  16: 'ソハヤノツルキ・極',
  17: '数珠丸恒次',
  18: '数珠丸恒次・極',
  19: 'にっかり青江',
  20: 'にっかり青江・極',
  23: '鳴狐',
  24: '鳴狐・極',
  25: '一期一振',
  26: '一期一振・極',
  27: '鯰尾藤四郎',
  28: '鯰尾藤四郎・極',
  29: '骨喰藤四郎',
  30: '骨喰藤四郎・極',
  31: '平野藤四郎',
  32: '平野藤四郎・極 ',
  33: '厚藤四郎',
  34: '厚藤四郎・極 ',
  35: '後藤藤四郎',
  36: '後藤藤四郎・極',
  37: '信濃藤四郎',
  38: '信濃藤四郎・極',
  39: '前田藤四郎',
  40: '前田藤四郎・極',
  41: '秋田藤四郎',
  42: '秋田藤四郎・極',
  43: '博多藤四郎',
  44: '博多藤四郎・極',
  45: '乱藤四郎',
  46: '乱藤四郎・極',
  47: '五虎退',
  48: '五虎退・極',
  49: '薬研藤四郎',
  50: '薬研藤四郎・極',
  51: '包丁藤四郎',
  52: '包丁藤四郎・極',
  53: '大包平',
  54: '大包平・極',
  55: '鶯丸',
  56: '鶯丸・極',
  57: '明石国行',
  58: '明石国行・極',
  59: '蛍丸',
  60: '蛍丸・極',
  61: '愛染国俊',
  62: '愛染国俊・極',
  63: '千子村正',
  64: '千子村正・極',
  65: '蜻蛉切',
  66: '蜻蛉切・極',
  67: '物吉貞宗',
  68: '物吉貞宗・極',
  69: '太鼓鐘貞宗',
  70: '太鼓鐘貞宗・極',
  71: '亀甲貞宗',
  72: '亀甲貞宗・極',
  73: '燭台切光忠',
  74: '燭台切光忠・極',
  75: '大般若長光',
  76: '大般若長光・極',
  77: '小竜景光',
  78: '小竜景光・極',
  79: '江雪左文字',
  80: '江雪左文字・極',
  81: '宗三左文字',
  82: '宗三左文字・極',
  83: '小夜左文字',
  84: '小夜左文字・極',
  85: '加州清光',
  86: '加州清光・極',
  87: '大和守安定',
  88: '大和守安定・極',
  89: '歌仙兼定',
  90: '歌仙兼定・極',
  91: '和泉守兼定',
  92: '和泉守兼定・極',
  93: '陸奥守吉行',
  94: '陸奥守吉行・極',
  95: '山姥切国広',
  96: '山姥切国広・極',
  97: '山伏国広',
  98: '山伏国広・極',
  99: '堀川国広',
  100: '堀川国広・極',
  101: '蜂須賀虎徹',
  102: '蜂須賀虎徹・極',
  103: '浦島虎徹',
  104: '浦島虎徹・極',
  105: '長曽祢虎徹',
  106: '長曽祢虎徹・極',
  107: '髭切',
  108: '髭切・特一',
  109: '髭切・特二',
  110: '髭切・特三',
  111: '髭切・極',
  112: '膝丸',
  113: '膝丸・特一',
  114: '膝丸・特二',
  115: '膝丸・極',
  116: '大倶利伽羅',
  117: '大倶利伽羅・極',
  118: 'へし切長谷部',
  119: 'へし切長谷部・極',
  120: '不動行光',
  121: '不動行光・極',
  122: '獅子王',
  123: '獅子王・極',
  124: '小烏丸',
  125: '小烏丸・極',
  128: '同田貫正国',
  129: '同田貫正国・極',
  130: '鶴丸国永',
  131: '鶴丸国永・極',
  132: '太郎太刀',
  133: '太郎太刀・極',
  134: '次郎太刀',
  135: '次郎太刀・極',
  136: '日本号',
  137: '日本号・極',
  138: '御手杵',
  139: '御手杵・極',
  140: '巴形薙刀',
  141: '巴形薙刀・極',
  142: '毛利藤四郎',
  143: '毛利藤四郎・極',
  144: '篭手切江',
  145: '篭手切江・極',
  146: '謙信景光',
  147: '謙信景光・極',
  148: '小豆長光',
  149: '小豆長光・極',
  150: '日向正宗',
  151: '日向正宗・極',
  152: '静形薙刀',
  153: '静形薙刀・極',
  154: '南泉一文字',
  155: '南泉一文字・極',
  156: '千代金丸',
  157: '千代金丸・極',
  158: '山姥切長義',
  159: '山姥切長義・極',
  160: '豊前江',
  161: '豊前江・極',
  162: '祢々切丸',
  163: '祢々切丸・極',
  164: '白山吉光',
  165: '白山吉光・極',
  166: '南海太郎朝尊',
  167: '南海太郎朝尊・極',
  168: '肥前忠広',
  169: '肥前忠広・極',
  170: '北谷菜切',
  171: '北谷菜切・極',
  172: '桑名江',
  173: '桑名江・極',
  174: '水心子正秀',
  175: '水心子正秀・極',
  176: '源清麿',
  177: '源清麿・極',
  178: '松井江',
  179: '松井江・極',
  180: '山鳥毛',
  181: '山鳥毛・極',
};

export enum swordTypeName {
  tanto = '短刀',
  wakizashi = '脇差',
  uchigatana = '打刀',
  tachi = '太刀',
  odachi = '大太刀',
  yari = '槍',
  naginata = '薙刀',
  tsurugi = '剣',
}

// 抜けている番号は情報不足のためフォロー必須
export const itemName = {
  1: {
    1: 'お守り',
    3: '仙人団子',
    4: '御札・富士',
    5: '御札・松',
    6: '御札・竹',
    7: '御札・梅',
    8: '手伝い札',
    13: '小判箱・小',
    14: '小判箱・中',
    15: '小判箱・大',
    17: '幕ノ内弁当',
    18: '手紙一式',
    19: '旅装束',
    20: '旅道具',
    21: '遠征呼び戻し鳩',
    22: '兵糧丸',
    24: '蘇言機',
    25: '笛',
    26: '琴',
    27: '三味線',
    28: '太鼓',
    29: '鈴',
    37: '一口団子',
    50: '三倍枡',
    58: '引換シール',
    60: '福豆',
    68: '堆肥',
    69: '特別肥料',
    89: '紅白饅頭',
    113: '慈姑',
    114: '花梨',
    115: '寒椿',
    116: '喜知次',
    119: '芥子菜',
    120: '檸檬',
    121: '菜の花',
    122: '公魚',
    1001: '根兵糖',
  },
  2: {},
  // 装備類（馬，刀装）
  // 3: {},
  4: {
    0: '小判',
  },
  5: {
    1: '依頼札',
    2: '木炭',
    3: '玉鋼',
    4: '冷却材',
    5: '砥石',
  },
};

// リソースのid確認
export const resourceId = {
  charcoal: 2,
  steel: 3,
  coolant: 4,
  file: 5,
};

export const conquestData = {
  1: {
    age: '維新の記憶',
    destination: '鳥羽・伏見の戦い',
    require: {
      time: 10,
      totalLv: 5,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 25,
        user_exp: 10,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 10,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 15,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  2: {
    age: '維新の記憶',
    destination: '世直し一揆',
    require: {
      time: 30,
      totalLv: 10,
      swordType: {
        tanto: true,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 70,
        user_exp: 20,
        item: [
          {
            item_type: 5,
            item_id: 4,
            item_num: 30,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 30,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  3: {
    age: '維新の記憶',
    destination: '甲州勝沼の戦い',
    require: {
      time: 20,
      totalLv: 20,
      swordType: {
        tanto: false,
        wakizashi: true,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 65,
        user_exp: 20,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 20,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 20,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  4: {
    age: '維新の記憶',
    destination: '白河戦線',
    require: {
      time: 60,
      totalLv: 30,
      swordType: {
        tanto: true,
        wakizashi: true,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 135,
        user_exp: 35,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 60,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 60,
          },
        ],
      },
      greatAdd: {
        item: [],
      },
    },
  },
  5: {
    age: '江戸の記憶',
    destination: '公武合体運動',
    require: {
      time: 90,
      totalLv: 50,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 285,
        user_exp: 55,
        item: [
          {
            item_type: 5,
            item_id: 4,
            item_num: 90,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 90,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 13,
            item_num: 1,
          },
        ],
      },
    },
  },
  6: {
    age: '江戸の記憶',
    destination: '加役方人足寄場',
    require: {
      time: 180,
      totalLv: 60,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: true,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 570,
        user_exp: 100,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 50,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 13,
            item_num: 1,
          },
        ],
      },
    },
  },
  7: {
    age: '江戸の記憶',
    destination: '享保の大飢饉',
    require: {
      time: 120,
      totalLv: 80,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: true,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 380,
        user_exp: 70,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 120,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 120,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  8: {
    age: '江戸の記憶',
    destination: '天下泰平',
    require: {
      time: 150,
      totalLv: 100,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: true,
        tachi: true,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 585,
        user_exp: 90,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 180,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 120,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  9: {
    age: '織豊の記憶',
    destination: '美濃国の決戦',
    require: {
      time: 240,
      totalLv: 110,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 760,
        user_exp: 130,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 130,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 240,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  10: {
    age: '織豊の記憶',
    destination: '反旗を翻した原因',
    require: {
      time: 180,
      totalLv: 120,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: true,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 700,
        user_exp: 105,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 60,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 150,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  11: {
    age: '織豊の記憶',
    destination: '安土城の警備',
    require: {
      time: 600,
      totalLv: 130,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 2325,
        user_exp: 315,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 14,
            item_num: 1,
          },
        ],
      },
    },
  },
  12: {
    age: '織豊の記憶',
    destination: '天下布武',
    require: {
      time: 480,
      totalLv: 140,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1860,
        user_exp: 255,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 1,
          },
        ],
      },
    },
  },
  13: {
    age: '戦国の記憶',
    destination: '長篠城攻城戦',
    require: {
      time: 120,
      totalLv: 150,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 540,
        user_exp: 80,
        item: [
          {
            item_type: 5,
            item_id: 3,
            item_num: 80,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 60,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 5,
            item_id: 1,
            item_num: 1,
          },
        ],
      },
    },
  },
  14: {
    age: '戦国の記憶',
    destination: '西上作戦',
    require: {
      time: 300,
      totalLv: 180,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1345,
        user_exp: 170,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 380,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 14,
            item_num: 1,
          },
        ],
      },
    },
  },
  15: {
    age: '戦国の記憶',
    destination: '甲相駿三国同盟',
    require: {
      time: 720,
      totalLv: 200,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 3600,
        user_exp: 385,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
        ],
      },
    },
  },
  16: {
    age: '戦国の記憶',
    destination: '比叡山延暦寺',
    require: {
      time: 360,
      totalLv: 220,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 1610,
        user_exp: 200,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 150,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 400,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  17: {
    age: '武家の記憶',
    destination: '鎌倉防衛戦',
    require: {
      time: 720,
      totalLv: 240,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 3220,
        user_exp: 380,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 250,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 250,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
        ],
      },
    },
  },
  18: {
    age: '武家の記憶',
    destination: '元寇防塁',
    require: {
      time: 1080,
      totalLv: 260,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: true,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 4830,
        user_exp: 560,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 500,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 300,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 8,
            item_num: 2,
          },
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  19: {
    age: '武家の記憶',
    destination: '流鏑馬揃え',
    require: {
      time: 900,
      totalLv: 280,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: true,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 4500,
        user_exp: 475,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 350,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 200,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 100,
          },
          {
            item_type: 5,
            item_id: 5,
            item_num: 250,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
        ],
      },
    },
  },
  20: {
    age: '武家の記憶',
    destination: '奥州合戦',
    require: {
      time: 1440,
      totalLv: 300,
      swordType: {
        tanto: false,
        wakizashi: false,
        uchigatana: false,
        tachi: false,
        odachi: false,
        yari: false,
        naginata: false,
        tsurugi: false,
      },
    },
    reward: {
      normal: {
        sword_exp: 7200,
        user_exp: 1490,
        item: [
          {
            item_type: 5,
            item_id: 2,
            item_num: 300,
          },
          {
            item_type: 5,
            item_id: 3,
            item_num: 400,
          },
          {
            item_type: 5,
            item_id: 4,
            item_num: 500,
          },
        ],
      },
      greatAdd: {
        item: [
          {
            item_type: 1,
            item_id: 15,
            item_num: 1,
          },
          {
            item_type: 5,
            item_id: 1,
            item_num: 3,
          },
        ],
      },
    },
  },

};
