<template>
    <div>
    <img src="https://axhub.im/pro/221031c5a692ef70/images/%E6%94%AF%E4%BB%98%E6%88%90%E5%8A%9F/u24.png" alt="">
      <h2>支付成功！</h2>
      <div class="f1" @click="f">返回首页</div>
     </div>
</template>
<script>

export default{
  data() {
    return {
    };
  },
  methods:{
  f(){
         this.$router.push({path:'/shop'})
     },}
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