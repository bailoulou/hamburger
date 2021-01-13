<template>
    <div class="container">
        <van-nav-bar
            title="餐桌预约"
            left-text=""
            right-text="傻逼玩意"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
        />

       <div class="tou">
           <span class="jia">!</span><span class="jia1">为了保证你的按时用餐，亲:请及时预定!</span>
       </div>
       <div class="er">
           <div>
               <ul>
                   <li>
                      
                       <div class="active">&lt;</div>
                       <div class="active1">
                           <p class="active2">今天</p>
                           <p>3-14</p>
                       </div>
                   </li>
                   <li>
                       <p class="active2">明天</p>
                       <p>3-15</p>
                   </li>
                   <li>
                       <p class="active2">后天</p>
                       <p>3-16</p>
                   </li>
                   <li>
                       <p class="active2">星期日</p>
                       <p>3-17</p>
                   </li>
                   <li>
                       <div class="active">&gt;</div>
                       <div class="tu">
                           <van-cell is-link @click="showPopup">
                                <van-icon name="comment-o" color="#1989fa" size="30" />
                                
                           </van-cell>
                            <van-popup v-model="show" position="bottom" :style="{ height: '70%' }">
                                <van-calendar
                                            title="日历"
                                            :poppable="false"
                                            :show-confirm="false"
                                            :style="{ height: '500px' }"
                                            />
                            </van-popup>
                       </div>
                   </li>
               </ul>
           </div>
       </div>
       <div class="san">
           <van-cell is-link title="选择就餐人数" @click="show1 = true" />
           <van-action-sheet
            v-model="show1"
            :actions="actions"
            cancel-text="取消"
            description="请选择就餐人数"
            close-on-click-action
            @select="onSelect"
            />
            
       </div>
       <div class="sisi">
           <div class="si">
           餐桌类型
       </div>
       <div class="si1">
           <van-grid :gutter="10" :column-num="3">
  <van-grid-item  text="">
      <template>
          <div class="aa">
          <p>大厅</p>
          <p>1-2人桌 </p>
          </div>
      </template>
      </van-grid-item>
  <van-grid-item  text="">
      <template>
          <div>
          <p>大厅</p>
          <p>3-4人桌 </p>
          </div>
      </template>
      </van-grid-item>
  <van-grid-item  text="">
      <template>
          <div>
          <p>大厅</p>
          <p>5-6人桌 </p>
          </div>
      </template>
      </van-grid-item>
  <van-grid-item  text="">
      <template>
          <div>
          <p>大厅</p>
          <p>6-8人桌 </p>
          </div>
      </template>
      </van-grid-item>
  <van-grid-item  text="">
      <template>
          <div>
          <p>包间</p>
          <p>9-12人桌 </p>
          </div>
      </template>
      </van-grid-item>
  <van-grid-item  text="">
      <template>
          <div>
          <p>包间</p>
          <p>13-15人桌 </p>
          </div>
      </template>
      </van-grid-item>
</van-grid>
       </div>
       </div>
       <div class="wuwu">
           <div class="wu">
           餐桌类型
       </div>
       <div class="wu1">
           <van-grid :gutter="10" :column-num="3">
  <van-grid-item>
      
      <template>
          <div>
            18:00
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item>
      
      <template>
          <div>
            18:30
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item>
      
      <template>
          <div>
            19:00
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item>
      
      <template>
          <div>
            19:30
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item  text="18:00">
      
      <template>
          <div  class="aa">
            20:00
          
          </div>
      </template>
      
  </van-grid-item>
 <van-grid-item>
      
      <template>
          <div>
            20:30
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item>
      
      <template>
          <div>
            21:00
          
          </div>
      </template>
      
  </van-grid-item>
  <van-grid-item>
      
      <template>
          <div>
            21:30
          
          </div>
      </template>
      
  </van-grid-item>
 <van-grid-item>
      
      <template>
          <div>
            22:00
          
          </div>
      </template>
      
  </van-grid-item>
</van-grid>
       </div>
       </div>
       <div class="wei">
          <span>立即绑定</span>
       </div>
    </div>
</template>
<script>
// 导入地址模块
// import uri from "@/config/uri";
// 导入vant组件
// import "@/assets/font/iconfont.css";
import Vue from 'vue';
import { NavBar, Toast, Popup ,Icon,Calendar,ActionSheet ,Cell,Grid, GridItem} from 'vant';
import 'vant/lib/index.css';
Vue.use(Popup);
Vue.use(Toast);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Calendar);
Vue.use(ActionSheet);
Vue.use(Cell);
Vue.use(Grid);
Vue.use(GridItem);

export default {
    data() {
    return {
        show: false,
        show1:false,
        actions: [
        { name: '1' },
        { name: '2' },
        { name: '3' },
        { name: '4' },
        { name: '5' },
        { name: '6' },
        { name: '7' },
        { name: '8人以上' },
      ],
    };
  },
     methods: {
    onClickLeft() {
      Toast('返回');
      
    },
    onClickRight() {
      Toast('按钮');
      
    },
    showPopup() {
      this.show = true;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show1 = false;
    //   Toast(item.name);
    },
  },
  
};
</script>

<style lang="scss" scoped>
.aa{
   background-color: #c5f8ef;
   color: #3BB19C;
   width: 100%;
   height: 100%;
   font-size: 14px;
}
.wei{
    border-width: 0px;
    position: relative;
    left: 0px;
    top: 0px;
    width: 245px;
    height: 42px;
    margin: 10px auto 0 auto;
    color: white;
    border: none;
    border-radius: 30px;
    -moz-box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    -webkit-box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    line-height: 43px;
        background-color: rgba(59, 177, 156, 1);
}
.wu1{
    margin-left: 10px;
}
.wuwu{
     width: 100%;
    padding-bottom: 10px;
    background-color: white;
     margin-top: 10px;
     overflow: hidden;
}

.wu{
    width: 100%;
    height: 37px;
   
    overflow: hidden;
  margin-bottom: 10px;
   text-align: left;
   padding-left: 16px;
   line-height: 37px;
   border-bottom:1px solid #999999;
   font-size:14px ;
}
.si1{
    margin-left: 10px;
}
.sisi{
     width: 100%;
    padding-bottom: 10px;
    background-color: white;
     margin-top: 10px;
     overflow: hidden;
}

.si{
    width: 100%;
    height: 37px;
   
    overflow: hidden;
  margin-bottom: 10px;
   text-align: left;
   padding-left: 16px;
   line-height: 37px;
   border-bottom:1px solid #999999;
   font-size:14px ;
}
.san{
   width: 100%;
    // height: 73px;
    // background-color: white;
    margin-top: 10px;
    // left: -20px;
     font-size:14px ;
text-align: left;
    
}
.container{
        border-width: 0px;
    position: absolute;
    
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: inherit;
    background-color: rgba(245, 245, 245, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    // display: flex;
}
.tou{
    border-width: 0px;
    position: relative;
    left: 0px;
    top: 0px;
    width: 328px;
    height: 43px;
    margin: 10px auto 0 auto;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 30px;
    -moz-box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    -webkit-box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    box-shadow: 2px 2px 2px rgba(121, 121, 121, 0.349019607843137);
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    line-height: 43px;
    
}
.jia1{
        border-width: 0px;
    left: 110px;
    top: 133px;
    width: 219px;
    height: 17px;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 13px;
    color: #3BB19C;
}
.jia{
    position: absolute;
    left: 25px;
    top: 13px;
    width: 18px;
    height: 18px;
    background-color: #3BB19C;
    border-radius: 9px;
    line-height: 18px;
}
.er{
    width: 100%;
    height: 72px;
    background-color: white;
    margin-top:10px;
    padding-left: 14px;
}
.er ul{
    width: 100%;
    height: 72px;
overflow: hidden;
display: flex;
// position: relative;
}
.er li{
    
    line-height: 69px;
    // float: left;
    flex: 1;
   
    order-width: 0px;
    
    height: 72px;
    // position: absolute;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    list-style: none;
}
.er li div{
    float: left;
}
.active{
    margin-right: 10px;
    margin-top: 22px;
}
.active2{
    margin-bottom: -10px;
}
.active1{
    color: rgb(59, 177, 156);
}

.tu .van-icon{
   bottom: 4px;
//    left: 3px;
   
  
}
</style>