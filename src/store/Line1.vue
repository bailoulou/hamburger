<template>
  <div class="line">
    <van-nav-bar title="排队取号" left-text="返回" left-arrow @click-left="onClickLeft" 
    style="border-bottom: 1px solid #e5e5e5">
    </van-nav-bar>
    <p class="text">听到叫号请到店内就餐，过号自动取消排队</p>
    <ul @click="onCheck" v-show="Text">
      <li class="bigBox">
        <div class="left">
          <p>小桌 桌号 1</p>
          <p>1-2人</p>
        </div>
        <div class="right">
          <p>
            等待<span>2</span>桌
          </p>
          <p>大约<span>20</span>分钟</p>
        </div>
      </li>
      <li class="bigBox">
        <div class="left">
          <p>中桌</p>
          <p>3-4人</p>
        </div>
        <div class="right">
          <p>
            等待<span>2</span>桌
          </p>
          <p>大约<span>20</span>分钟</p>
        </div>
      </li>
      <li class="bigBox">
        <div class="left">
          <p>大桌</p>
          <p>5-8人</p>
        </div>
        <div class="right">
          <p>
            等待<span>2</span>桌
          </p>
          <p>大约<span>20</span>分钟</p>
        </div>
      </li>
      <li class="bigBox">
        <div class="left">
          <p>特大桌</p>
          <p>9-16人</p>
        </div>
        <div class="right">
          <p>
            等待<span>2</span>桌
          </p>
          <p>大约<span>20</span>分钟</p>
        </div>
      </li>
    </ul>

    <div class="foot" @click="table">
      {{PaiDui}}
    </div>
    <div class="paidui" v-show="!Text">
      <p>正在排队</p>
      <p>{{PaiDuiNum}}</p>
      <!-- {{}} -->
      前方等待1桌
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// 需要隐藏的脚部的页面需要加上
import { mapMutations } from "vuex";
import { NavBar, Toast,Overlay  } from "vant";

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Overlay);

export default {
  data(){
    return{
      Text:true,
      PaiDui:'立即取号',
      PaiDuiNum:"A008",
      Num: 0,
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push({path:"/shop"})
      // 需要隐藏的脚部的页面需要加上
      this.setFooter(true)
    },
    // 需要隐藏的脚部的页面需要加上
    ...mapMutations("global", ["setFooter"]),
    table(){
      this.Text = !this.Text
      if(this.Text == false){
        this.PaiDui = '取号成功(取消排队)'
      }else{
        this.PaiDui = '立即取号'
      }
      
    },
    onCheck() {
      const btns = document.querySelectorAll("ul > li");

      for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function() {
          for (let j = 0; j < btns.length; j++) {
            btns[j].classList.remove("active");
          }

          btns[i].classList.add("active");
        };
      }

    },
  },
  // 需要隐藏的脚部的页面需要加上
  created(){
      this.setFooter(false)
  },
};
</script>

<style lang="scss" scoped>
.text {
  text-align: center;
  color: red;
}
.paidui{
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 25px;
}
.left {
  width: 30%;
  text-align: center;
  border-right: 1px solid red;
  height: 50px;
}
.left p {
  margin: 0;
  margin-bottom: 10px;
}
.bigBox {
  width: 80%;
  height: 90px;
  border: 1px solid orange;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.active {
  border: 1px solid green;
  background-color: #c0ebd7;
}
.right {
  display: flex;
}

.right p {
  margin-left: 30px;
}
.right span {
  color: blue;
  font-size: 20px;
}
.foot {
  width: 60%;
  background-color: #3bb19c;
  height: 40px;
  margin: 0 auto;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 20px;
}
</style>
