<template>
  <div>
    <div class="header">
      <span class="hao">010号桌</span>
      <input class="sousuo" type="text" placeholder="搜索菜品" />
    </div>

    <van-tree-select
      height="120vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <div>
          <span
            class="rxb"
            v-for="(item, index) in items"
            :key="index"
            v-show="index === active"
            >{{ item.text }}</span
          >
         <ul>
          <van-card
          v-for="(items,index) in hanbao"
          :key="index"
            :price="items.price"
            :title="items.name"
            :thumb="items.img"
          >
            <template #tags >
              <van-tag plain type="danger">{{items.q1}} </van-tag>
              <van-tag plain type="danger">{{items.q2}} </van-tag>
              <van-tag plain type="danger">{{items.q3}} </van-tag>
              <p>月售 {{items.shou}}</p>

              <button class="van-button" @click="jia(items.price)">+</button>
            </template>
          </van-card>
     </ul>
          <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </div>
      </template>
    </van-tree-select>
    

    <!-- 加入购物车 -->
    <div class="gwc">
        <div class="che">
        <img   src="https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u151.png" alt="">
        </div>
        <div class="jg">￥<span>{{num}}</span></div>
        <div class="gm" @click="tiao"><span>去下单</span></div>
        <span class="numt">{{num2}}</span>

    </div>
    

  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect, Image, Card, Button, Tag } from "vant";
import "vant/lib/index.css";
Vue.use(TreeSelect);
Vue.use(Image);
Vue.use(Card);
Vue.use(Button);
Vue.use(Tag);
export default {
  data() {
    return {
      active: 0,
      num:0,
      num2:0,
      items: [
        { text: "热销榜" },
        { text: "折扣" },
        { text: "汉堡包" },
        { text: "鸡肉卷" },
        { text: "饮品" },
        { text: "双人餐" },
        { text: "单人餐" },
        { text: "全家桶" },
        { text: "酱料包" },
      ],
      hanbao:[
          {name:"香辣鸡腿堡",shou:"132",q1:"香辣",q2:"面包片",q3:"生菜",price:"15.8",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u7.png"},
          {name:"美年达plus杯",shou:"12",q1:"橙味",q2:"都说好",q3:"good",price:"6.8",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u22.png"},
          {name:"老北京鸡肉卷",shou:"1000",q1:"原味",q2:"鸡腿肉",q3:"生菜",price:"7.9",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u34.png"},
          {name:"老北京鸡肉卷",shou:"132",q1:"香辣",q2:"面包片",q3:"生菜",price:"7.9",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u34.png"},
          {name:"美年达plus杯",shou:"12",q1:"橙味",q2:"都说好",q3:"good",price:"6.8",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u22.png"},
          {name:"老北京鸡肉卷",shou:"132",q1:"香辣",q2:"面包片",q3:"生菜",price:"7.9",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u34.png"},
      ]
    };
  },
  methods: {
    jia(aaa) {
   this.num += aaa-0
     this.num2++
     },
     tiao(){
         this.$router.push({path:'/queren'})
     }
  },
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  border: 1px #CDCDCD solid;
  width: calc(100% - 2px);
  height: 100px;
  .hao {
    color: green;
    text-align: left;
    font-size: 14px;
    align-self: center;
  }
  .sousuo {
    width: 250px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid;
    border-color: #CDCDCD;
    outline: none;
    align-self: center;
  }
}
.rxb {
  display: flex;
}
.IMG {
  display: flex;
  width: 95px;
}
.van-tag--danger.van-tag--plain {
  margin-top: 5px;
}
.van-card__bottom {
  margin-right: 25px;
  margin-top:-25px;
}
.van-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ff9900;
  color: #fff;
  outline: none;
  border: 2px solid;
  position: relative;
  top: 0px;
  right: -30px;
}
.gwc{
    width:80%;
    height: 39px;
    // border: 3px solid #333;
    position: fixed;
    bottom: 50px;
    margin:auto;
    left:50%;
    transform:translateX(-50%);
    .che{
        background: #333333;
        width: 50px;
        height: 50px;
        position: absolute;
        border-radius:50%;
        top: -5px;
        left: -13px;
       img{
        width: 35px;
        height: 35px;
        margin:7px auto;

    } 
      
    }
    .jg{
        width: 70%;
        height: 100%;
        background:#666666;
        color:#fff;
        span{
           text-align: center;
           line-height: 35px;
           color:#fff;
        }
    }
     .gm{
           position: absolute;
           left:209px;
           top:0px;
           width: 100px;
           height: 39px;      
           background: #FF0000;
           border-top-right-radius: 30px;
           border-bottom-right-radius: 30px;
           text-align: center;
           line-height: 35px;
           cursor: pointer;
           color:#fff;

 }
 
}
.numt{
    display: block;
    width: 20px;
    height: 20px;
    background:#FF0000;
    line-height: 23px;
    border-radius:100%;
    z-index:999;
    position: fixed;
    top: -5px;
    left: 15px;
}
.van-card__content{
    height: 100px;
}
</style>