<template>
    <div>
        <van-nav-bar title="首页"/>
        <!-- <p></p>
        <van-grid :gutter="20" >
            <van-grid-item
             style="flex-basis: 50%;" 
             icon="photo-o" 
             text="扫码点餐" />
             <van-grid-item
             style="flex-basis: 50%;" 
             icon="photo-o" 
             text="优惠券" />
        </van-grid>
        <p></p>
        <van-grid :gutter="20" >
             <van-grid-item
             style="flex-basis: 50%;" 
             icon="photo-o" 
             text="排队取号" />
             <van-grid-item
             style="flex-basis: 50%;"  
             icon="photo-o" 
             text="餐桌预约" />
        </van-grid> -->
        <div class="header">
            <div class="left">
                <img src="../../assets/q3.png" alt="">
            </div>
            <div class="right">
                <div>
                    <h3>汉堡</h3>
                    <p>132&nbsp;&nbsp;1234&nbsp;&nbsp;5678</p>
                </div>
                <div class="sel">
                    <i>营业中</i>
                    <b>详情<span class="iconfont icon-xiala"></span></b>
                </div>
            </div>
        </div>
        <div class="center"></div>
        <div class="bottom">
            <div @click="skip1">
                <span class="iconfont icon-diancan" ></span>
                <p>扫码点餐</p>
            </div>
            <div @click="skip2">
                <span class="iconfont icon-youhuiquan" ></span>
                <p>优惠券</p>
            </div>
            <div @click="skip3">
                <span class="iconfont icon-paiduiquhao0101" ></span>
                <p>排队取号</p>
            </div>
            <div @click="skip4">
                <span class="iconfont icon-yuyue" ></span>
                <p>餐桌预定</p>
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/font/iconfont.css";
import Vue from 'vue';
import { Grid, GridItem, NavBar } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
export default {
    methods: {
        skip1(){
            this.$router.push({path:"/order"})
        },
        skip2(){
            this.$router.push({path:"/discount"})
        },
        skip3(){
            this.$router.push({path:"/line"})
        },
        skip4(){
            this.$router.push({path:"/table"})
        }
    }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    i{
        font-style: normal;
    }
    b{
        font-weight: normal;
    }
    .header{
        height: 115px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem 0 1rem;
        border-top: 1px solid #e4e4e4;
    }
    .left{
        height: 85px;
        width: 85px;
        // border: 1px solid black;
        margin-right: 5px;
    }
    .left>img{
        width: 85px;
        // margin-top: 15px;
    }
    .right{
        height: 66px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .right div:nth-of-type(1){
        margin-right: 4.8rem;
    }
    .right div:nth-of-type(1) h3{
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 22px;
    }
    .right div:nth-of-type(1) p{
        line-height: 1;
        font-size: 15px;
        font-weight: 500;
    }
    .right .sel{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .right .sel i{
        margin-bottom: 15px;
        height: 26px;
        width: 76px;
        font-size: 16px;
        line-height: 26px;
        text-align: center;
        background-color: #3bb19c;
        border-radius: 5px;
        color: #fff;
    }
    .center{
        height: 15px;
        background-color: #e4e4e4;
        // border: 1px solid red;
    }
    .bottom{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .bottom div{
        display: flex;
        flex-direction: column;
        height: 120px;
        width: 45%;
        // border: 1px solid black;
        margin-top: 10px;
        border-radius: 10px;
        align-items: center;
        justify-content: space-evenly;
        color: #fff;
    }
    .bottom div>span{
        font-size: 44px;
    }
    .bottom div:nth-of-type(1){
        margin-top: 40px;
        background-color: #ff9381;
    }
    .bottom div:nth-of-type(2){
        margin-top: 40px;
        background-color: #b3c4fe;
    }
    .bottom div:nth-of-type(3){
        background-color: #8581ff;
    }
    .bottom div:nth-of-type(4){
        background-color: #ffb180;
    }
    


    

</style>