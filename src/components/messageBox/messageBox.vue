<template>
  <div class="wj-messageBox">
    <Shade v-if="show">
      <div class="wj-messageBox-border scale" :style="{width: inWidth}">
        <h3 class="wj-messageBox-tit" v-if="tit">{{tit}}</h3>
        <div class="wj-messageBox-main">{{content}}</div>
        <div class="wj-messageBox-footer flex flex-hsb" v-if="doubleBtn">
          <div @click="close" class="left btn">{{leftBtnTxt}}</div>
          <div @click="btnClick()" class="right btn">{{rightBtnTxt}}</div>
        </div>
        <div class="wj-messageBox-btn" @click="btnClick()" v-else>{{btnTxt}}</div>
      </div>
      <img
        @click="close"
        class="wj-messageBox-close"
        v-if="closeState"
        src="../../assets/img/common/pop_close.png"
        alt
      >
    </Shade>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },
  props: [
    'tit',
    'width',
    'btnTxt',
    'closeState',
    'content',
    'clickClose',
    'singleBtn',
    'doubleBtn',
    'leftBtnTxt',
    'rightBtnTxt'
  ],
  created() {},
  methods: {
    btnClick() {
      this.$emit('btnClick', '')
    },
    close() {
      this.$emit('close', '')
    }
  },
  computed: {
    inWidth() {
      return this.width || ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/rem';
.wj-messageBox {
  .wj-messageBox-border {
    position: relative;
    width: st(600);
    height: auto;
    padding: 0 st(20) st(40);
    background-color: $white;
    border-radius: st(32);
    transform: scale(1);
  }
  .wj-messageBox-footer {
    width: 90%;
    margin: 0 auto;
    .btn {
      @include wh(230, 88);
      line-height: st(88);
      text-align: center;
      border-radius: 999rem;
      color: $white;
      font-weight: bold;
    }
    .left {
      background: rgba(255, 109, 37, 0.2);
      color: #ff6d25;
    }
    .right {
      background: #ff6d25;
    }
  }
  .scale {
    animation: scale 0.3s ease;
    -webkit-animation: scale 0.3s ease;
  }
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .wj-messageBox-close {
    position: absolute;
    bottom: st(360);
    left: 50%;
    margin-left: -st(26);
    width: st(52);
  }
  .wj-messageBox-tit {
    padding-top: st(40);
    width: 100%;
    height: st(100);
    text-align: center;
    font-size: st(40);
    font-weight: bold;
    color: #333;
  }
  .wj-messageBox-tit-left {
    color: #333;
    float: left;
    font-size: st(30);
  }
  .wj-messageBox-tit-right {
    float: right;
    font-size: st(26);
    color: #9bacc6;
  }
  .wj-messageBox-main {
    padding: st(30) st(18) st(30) st(28);
    width: 100%;
    text-align: center;
    font-size: st(30);
    color: #666;
  }
  .wj-messageBox-btn {
    margin: 0 auto;
    display: block;
    width: st(320);
    height: st(80);
    line-height: st(80);
    text-align: center;
    background: -webkit-linear-gradient(left, #fe9428, #ff520d);
    background: -o-linear-gradient(right, #fe9428, #ff520d);
    background: -moz-linear-gradient(right, #fe9428, #ff520d);
    background: linear-gradient(to right, #fe9428, #ff520d);

    border-radius: 999rem;
    font-size: st(30);
    color: #fff;
  }

  .fadeDown-enter-active,
  .fadeDown-leave-active {
    height: st(300);
    -webkit-transition: 0.2s ease-out;
    transition: 0.2s ease-out;
    transform-origin: center top;
  }

  .fadeDown-enter,
  .fadeDown-leave-to {
    height: st(0);
  }
}
</style>
