<template>
    <div>
       <van-nav-bar
        title="优惠券"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #e5e5e5"
        />
        <h4>暂无优惠券</h4>
    </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
// 需要隐藏的脚部的页面需要加上
import { mapMutations } from "vuex"

Vue.use(NavBar);
export default {
     methods: {
        onClickLeft() {
        // Toast('返回');
            this.$router.push({path:"/shop"})
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
        font-weight: 500;
        text-align: center;
        height: 100px;
        line-height: 100px;
        // border-top: 1px solid #e5e5e5;
    }
    
</style>