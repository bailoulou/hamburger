<template>
    <div>
       <van-nav-bar
        title="我的订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #e5e5e5"
        />
        <van-tabs @click="onClick">
            <van-tab title="全部">
                <h4>暂无订单</h4>
                <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                >
                    <template #tags>
                        <van-tag plain type="danger">标签</van-tag>
                        <van-tag plain type="danger">标签</van-tag>
                    </template>
                    <template #footer>
                        <van-button size="mini">按钮</van-button>
                        <van-button size="mini">按钮</van-button>
                    </template>
                </van-card>
            </van-tab>
            <van-tab title="待付款">
                <h4>暂无订单</h4>
            </van-tab>
            <van-tab title="已完成">
                <h4>暂无订单</h4>
            </van-tab>
            <van-tab title="已取消">
                <h4>暂无订单</h4>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapMutations } from "vuex"
import { Tab, Tabs, Card, NavBar, Tag, Button } from 'vant';

Vue.use(Card);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tag);
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

        onClick(name, title) {
            
        },
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