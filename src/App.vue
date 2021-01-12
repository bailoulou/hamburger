<template>
  <div id="app">
    <div id="nav">
      <Footer v-show="isShow"></Footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Footer from "@/components/Navigation/Footer"
export default {

  components: {
    Footer,
  },
  // 需要隐藏的脚部的页面需要加上
  computed: {
    isShow() {
        return this.$store.state.global.isShowFooter;
    },
  },
}
</script>

<style lang="scss">
  // body{
  //   background-color: #e5e5e5;
  // }
</style>
