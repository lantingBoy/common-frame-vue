
<template>
  <div class="test" @click="test">
    <van-button type="primary">默认按钮</van-button>
  </div>
</template>

<script>
import { testApi } from '@/api/allApi'
export default {
  data() {
    return {}
  },
  created() {
    this.testApi()
  },
  methods: {
    testApi() {
      testApi({
        name: 'advert-activity-debris',
        key: 'homeExposure',
        description: '首页曝光',
        uuid: 499538011789332480
      }).then(res => {
        console.log('接口success')
      })
    },
    test() {
      console.log('fastclick')
    }
  }
}
</script>


<style lang="scss" scoped>
@import './index';
</style>
