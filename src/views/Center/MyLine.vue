<template>
    <div>
       <van-nav-bar
        title="我的预约"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #e5e5e5"
        />
        <h3>暂无预约</h3>
        <div class="table">
            <div class="left">
                <h4>大厅(3-5人桌)</h4>
                <p>预定时间: <span>12月12号 12:30</span></p>
                <p>就餐人数: <i>6</i>人</p>
            </div>
            <button>等待确认</button>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { mapMutations } from "vuex"

Vue.use(NavBar);
export default {
     methods: {
        onClickLeft() {
        // Toast('返回');
            this.$router.push({path:"/center"})
            // 需要隐藏的脚部的页面需要加上
            this.setFooter(true)
        },
        // 需要隐藏的脚部的页面需要加上
        ...mapMutations("global", ["setFooter"]),
    },
    // 需要隐藏的脚部的页面需要加上
    created(){
        this.setFooter(false)
    },
    // 需要隐藏的脚部的页面需要加上
    // beforeDestory(){
    //     this.setFooter(true)
    // }
}
</script>

<style lang="scss" scoped>
    h4{
        line-height: 1;  
        font-weight: 500;
        font-size: 20px;
    }
    p{
        margin: 5px;
        padding: 0;
        font-size: 16px;
        color: #50616d;
    }
    h3{
        font-weight: 500;
        text-align: center;
        height: 100px;
        line-height: 100px;
        // border-top: 1px solid #e5e5e5;
    }
    .table{
        border-top: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .table>.left{
        display: flex;
        flex-direction: column;
        width: 200px;
        padding-right: 20px;
    }
    .table>button{
        height: 30px;
        border-radius: 15px;
        background-color: #16a951;
    }
    
</style>