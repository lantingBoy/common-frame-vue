<template>
  <div class="xm-shade flex-zhong" @click="close($event)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: [],
  computed: {},
  created() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden'
  },
  methods: {
    close(event) {
      if (event.target.getAttribute('class') === 'xm-shade') {
        this.$emit('close', '')
      }
    }
  },
  mounted() {},
  destroyed() {
    document.getElementsByTagName('html')[0].style.overflow = 'auto'
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/rem';
.xm-shade {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  width: auto;
  height: auto;
  background: rgba(0, 0, 0, 0.7);
}
</style>