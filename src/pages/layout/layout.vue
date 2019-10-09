<template>
  <div>
    <van-nav-bar :title="$route.meta.name" v-if="$route.meta.hideHeader" @click-left="onClickLeft">
      <van-icon name="arrow-left" slot="left" v-show="$route.meta.showBack" @click="onClickBack"/>
      <van-button
        type="primary"
        size="mini"
        slot="right"
        @click="onClickRight"
        v-if="$route.meta.tabRight"
      >{{$route.meta.tabRight}}</van-button>
    </van-nav-bar>
    <router-view></router-view>
    <MessageBox
      v-if="alertData.state"
      @btnClick="btnClick"
      @close="close"
      :closeState="alertData.closeState"
      :tit="alertData.tit"
      :clickClose="alertData.clickClose"
      :btnTxt="alertData.btnTxt"
      :content="alertData.content"
      :doubleBtn="alertData.doubleBtn"
      :leftBtnTxt="alertData.leftBtnTxt"
      :rightBtnTxt="alertData.rightBtnTxt"
    ></MessageBox>
  </div>
</template>

<script>
export default {
  computed: {
    alertData() {
      return this.$store.getters.alertData
    },
    rightBarFun() {
      return this.$store.getters.rightBarFun
    }
  },
  created() {
    /* this.$store.commit('SetAlertData', {
      state: true,
      tit: '提示',
      content:
        '亲，目前ABC试玩赚钱仅支持苹果手机！请使用苹果手机访问ABC试玩赚钱',
      btnTxt: '我知道了',
      doubleBtn: false,
      clickClose: false
    }) */
  },
  methods: {
    btnClick() {
      if (this.alertData.btnClick) {
        this.alertData.btnClick()
      } else {
        this.$store.commit('SetAlertData', {
          state: false
        })
      }
    },
    close() {
      if (this.alertData.close) {
        this.alertData.close()
      } else {
        this.$store.commit('SetAlertData', {
          state: false
        })
      }
    },

    onClickLeft() {},
    onClickRight() {
      this.rightBarFun()
    },
    onClickBack() {}
  }
}
</script>

<style>
</style>
