<template>
<div>
      <span class="hao">010号桌</span>


    <van-tree-select>
   
      <template #content>
        <div>
         <ul class="sss">
          <van-card
          v-for="(items,index) in hanbao"
          :key="index"
            :price="items.price"
            :title="items.name"
            :thumb="items.img"
          >
            <template #tags >
            </template>
          </van-card>
          <span class="yh">已优惠0元</span> 
    <p class="yh1">小计￥<span>30.5</span> </p>
     </ul>
        </div>
      </template>
    </van-tree-select>
    
    <!-- 加入购物车 -->
    <div class="gwc">
        <div class="che">
        <img   src="https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u151.png" alt="">
        </div>
        <div class="jg">￥<span>30.5</span></div>
        <div class="gm" @click="tiao"><span>结账</span></div>
        <span class="numt">3</span>

    </div>
    
</div>
</template>



<script>
// 需要隐藏的脚部的页面需要加上
import { mapMutations } from "vuex"
export default {
  data() {
    return {
      num:0,
      num2:0,
      hanbao:[
          {name:"香辣鸡腿堡",shou:"132",q1:"香辣",q2:"面包片",q3:"生菜",price:"15.8",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u7.png"},
          {name:"美年达plus杯",shou:"12",q1:"橙味",q2:"都说好",q3:"good",price:"6.8",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u22.png"},
          {name:"老北京鸡肉卷",shou:"1000",q1:"原味",q2:"鸡腿肉",q3:"生菜",price:"7.9",img:"https://axhub.im/pro/221031c5a692ef70/images/%E6%89%AB%E7%A0%81%E7%82%B9%E9%A4%90/u34.png"},
      ]
    };
  },
  methods:{
  tiao(){
         this.$router.push({path:'/shopy'})
     },
     // 需要隐藏的脚部的页面需要加上
        ...mapMutations("global", ["setFooter"]),
     },
     created(){
        this.setFooter(false)
    },
    // 需要隐藏的脚部的页面需要加上
    beforeDestory(){
        this.setFooter(true)
    }
};
</script>
<style lang="scss" scoped>

  .hao {
    color: green;
    text-align: left;
    font-size: 14px;
    align-self: center;
  }

// 购物车
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
.sss{
    position:fixed;
    left:0;
    width: 100%;
    font-size:25px;
}
.van-card__title{
    margin-top:10px;
    font-size:15px;

}
.van-card__bottom{
position:relative;
top:-30px;
}
.yh{
    font-size:10px;
}
.yh1{
    font-size: 20px;
    position: absolute;
    right:20px;
    span{
        color:red;
    }
}

</style>