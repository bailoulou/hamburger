<template>
    <div>
       <van-nav-bar title="我的" style="border: 1px solid #e5e5e5"/>
       <div class="header">
           <img src="../../assets/q3.png">
           <h4>您当前所在 1 号桌</h4>
       </div>
       <van-cell title="我的订单" is-link @click="toMyOrder"/>
       <van-cell title="我的预约" is-link @click="toMyLine"/>
       <van-cell title="我的优惠券" is-link value="0" @click="toMyDiscount"/>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
export default {
    methods: {
        toMyOrder(){
            this.$router.push({path:"/myOrder"})
        },
        toMyLine(){
            this.$router.push({path:"/myLine"})
        },
        toMyDiscount(){
            this.$router.push({path:"/myDiscount"})
        }

    },
    
}
</script>

<style lang="scss" scoped>
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 240px;
        background-color: #424c50;
        margin-bottom: 20px;
    }
    .header>img{
        height: 150px;
    }
    .header>h4{
        color: #fff;
        font-weight: 400;
    }
    van-cell{
        border: 1px solid black;
    }
</style>