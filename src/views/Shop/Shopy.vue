<template>
    <div>
      <van-nav-bar
        title="优惠券"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #e5e5e5"
        />
    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E6%94%AF%E4%BB%98%E6%88%90%E5%8A%9F/u24.png" alt="">
      <h2>支付成功！</h2>
      <div class="f1" @click="f">返回首页</div>
     </div>
</template>
<script>
import Vue from 'vue';
import { NavBar } from 'vant';
// 需要隐藏的脚部的页面需要加上
import { mapMutations } from "vuex"
Vue.use(NavBar);
export default{
  data() {
    return {
    };
  },
  methods:{
  f(){
         this.$router.push({path:'/shop'})
     },
     onClickLeft() {
        // Toast('返回');
            this.$router.push({path:"/shop"})
            // 需要隐藏的脚部的页面需要加上
            this.setFooter(true)
        },
        // 需要隐藏的脚部的页面需要加上
        ...mapMutations("global", ["setFooter"]),
  },
  created(){
        this.setFooter(false)
    },
}
</script>


<style scoped>
  .f1{
      width: 300px;
      height: 50px;
      color:aliceblue;
      background: skyblue;
      margin:100px auto;
      font-size: 30px;
      border-radius:30px;
  }
</style>