<template>
    <div>
       <van-nav-bar
        title="确认订单"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="border-bottom: 1px solid #e5e5e5"
        />
        <div class="header"> {{tableNum}}号桌</div>
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

        <van-cell title="优惠券" is-link value="暂无可用" @click="goDiscount"/>

        <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />

        <van-cell is-link title="就餐人数" @click="show = true" />
        <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        description="请选择就餐人数"
        close-on-click-action
        />


        <van-cell-group>
            <van-field v-model="value" label="备注" placeholder="请输入口味,偏好等问题" />
        </van-cell-group>
    </div>
</template>

<script>
import Vue from 'vue';
// 需要隐藏的脚部的页面需要加上
import { mapMutations } from "vuex";
import { Tab, Tabs, Card, NavBar, Tag, Button, Field, SubmitBar, ActionSheet, Cell, CellGroup } from 'vant';

Vue.use(ActionSheet);
Vue.use(Card);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(Button);
Vue.use(Tag);
Vue.use(Field);
Vue.use(SubmitBar);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
    data() {
        return {
            value: '',
            show: false,
            actions: [
                { name: '1' },
                { name: '2' },
                { name: '3' },
                { name: '4' },
                { name: '5' },
                { name: '6' },
                { name: '7' },
                { name: '8' },
                { name: '9', subname: '' },
            ],
        };
    },
     methods: {
        onClickLeft() {
        // Toast('返回');
            this.$router.push({path:"/order"})
            // 需要隐藏的脚部的页面需要加上
            this.setFooter(true)
        },
        // 需要隐藏的脚部的页面需要加上
        ...mapMutations("global", ["setFooter"]),

        onClick(name, title) {
            
        },
        onSubmit(){

        },
        goDiscount(){
            this.$router.push({path:"/discount"})
        }
    },
    // 需要隐藏的脚部的页面需要加上
    created(){
        this.setFooter(false)
    },
    computed: {
        tableNum(){
            return JSON.parse(window.localStorage.getItem('tableNum'))[0]
        }
    },
}
</script>

<style lang="scss" scoped>
    .header{
        height: 40px;
        line-height: 40px;
        color: #1bd1a5;
        padding-left: 10px;
    }
    
</style>