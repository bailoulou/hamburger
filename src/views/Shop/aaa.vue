<template>
  <div class="line">
    <van-nav-bar title="排队取号" left-text="返回" left-arrow @click-left="onClickLeft" 
    style="border-bottom: 1px solid #e5e5e5">
    </van-nav-bar>
    <p class="text">听到叫号请到店内就餐，过号自动取消排队</p>
    <ul v-show="Text">
      <li class="bigBox" v-for="(item, index) in lineInfo" 
      :key="index" 
      @click="onCheck(item)" 
      :class="{active: item.isActive}"
      v-show="Text"
      >
        <div class="left">
          <p>{{item.name}} 桌号{{item.id}}</p>
          <p>{{item.num}}人</p>
        </div>
        <div class="right">
          <p>
            等待<span>{{item.wait}}</span>桌
          </p>
          <p>大约<span>{{item.time}}</span>分钟</p>
        </div>
      </li>
    </ul>

    <div class="foot" @click="table">
      {{PaiDui}}
    </div>
    <div class="paidui" v-show="!Text">
      <p>当前桌号{{tableNum[0]}}</p>
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
var lineInfo = [
  {id: 1, name: '小桌', num: "1-2", wait: 0, time: 20, isActive: false},
  {id: 2, name: '中桌', num: "3-4", wait: 0, time: 20, isActive: false},
  {id: 3, name: '大桌', num: "5-8", wait: 0, time: 20, isActive: false},
  {id: 4, name: '特大桌', num: "9-16", wait: 0, time: 20, isActive: false},
]
export default {
  data(){
    return{
      lineInfo,
      Text:true,
      PaiDui:'立即取号',
      PaiDuiNum:"008",
      Num: 0,
      tableNum: [],
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
      // console.log(this.lineInfo)
      this.Text = !this.Text
      if(this.Text == false){
        this.PaiDui = '取号成功(取消排队)'
      }else{
        this.PaiDui = '立即取号'
        this.tableNum = []
      }
      console.log(this.tableNum)
      window.localStorage.setItem('tableNum', JSON.stringify(this.tableNum))
      
    },
    onCheck(item){
      // console.log(item)
      this.lineInfo.forEach(item => {
        item.isActive = false
      })
      item.isActive = true
      this.tableNum.length = 0
      this.tableNum.push(item.id)
      // console.log(this.tableNum)
    }
  },
  // 需要隐藏的脚部的页面需要加上
  created(){
      this.setFooter(false)
      console.log(JSON.parse(window.localStorage.getItem('tableNum'))[0])
      const 
      this.lineInfo.forEach(item => {
        item.isActive = false
      })
      // console.log(this.Text)
  },
};
</script>

<style lang="scss" scoped>
p{
  font-size: 14px;
}
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
