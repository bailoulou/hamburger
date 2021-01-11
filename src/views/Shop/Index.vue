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
            <div>图片</div>
            <div>
                <div>
                    <h3>汉堡</h3>
                    <p>132&nbsp;&nbsp;1234&nbsp;&nbsp;5678</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem, NavBar } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
export default {
    
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    p{
        height: 10px;
        // line-height: 1;
    }
</style>