<template>
    <div>
        <van-tabbar 
        v-model="active" 
        active-color="#3de1ad" 
        inactive-color="#000"
        @change="changeItem"
        >
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    data() {
        return {
        active: 0,
        urls: ["/shop", "/center"]
        };
    },
    created(){
        this.active = this.urls.indexOf(this.$route.path)
    },
    methods: {
        changeItem(index){
            this.$router.push(this.urls[index])
        }
    }


    
}
</script>