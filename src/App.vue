<template>
  <div id="app">
    <div id="nav">
      <Footer></Footer>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Footer from "@/components/Navigation/Footer"
export default {
  components: {
    Footer,
  }
}
</script>

<style lang="scss">

</style>
