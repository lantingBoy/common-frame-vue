const user = {
  state: {
    rightBarFun: null,
    alertData: {
      state: false,
      tit: '', // 弹框title
      btnTxt: '', // 按钮文字
      closeState: false, //是否显示关闭图标
      close: null, //关闭弹框
      btnClick: null, //弹框按钮点击回调函数
      content: '', //弹框内容
      clickClose: true, // 点击后是否要关闭弹窗 默认true
      doubleBtn: false,
      leftBtnTxt: '',
      rightBtnTxt: ''
    },
  },
  mutations: {
    setRightBar: (state, data) => {
      state.rightBarFun = data
    },
    SetAlertData: (state, data) => {
      state.alertData.close = data.close;
      state.alertData.btnClick = data.btnClick;
      state.alertData = data;
    },
  },

};

export default user;
