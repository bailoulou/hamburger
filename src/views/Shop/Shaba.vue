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
       <div class="z">
           <div class="z1">
               预约信息
           </div>
           <div class="z2">
               <p>预定时间：2018-12-12 08：30</p>
               <p>餐桌类型：大厅（1-2）人桌</p>
               <p>就餐人数：6人</p>
           </div>
       </div>
       <div class="y">
           <div class="y1">
               联系人信息
           </div>
           <div class="y2">
              <div class="y21">
                  <span>联系人：</span>
                  <span class="y211">请输入你的姓名</span>
              </div>
              <div class="y22">
<van-field name="radio" label="性别：">
  <template #input>
    <van-radio-group v-model="checked" direction="horizontal">
      <van-radio name="1">女</van-radio>
      <van-radio name="2">男</van-radio>
    </van-radio-group>
  </template>
</van-field>
              </div>
              <div class="y23">
                  <span>手机号：</span>
                  <span class="y211">请输入您的手机号</span>
              </div>
              <div class="y24">
                  <span>联系人：</span>
                  <span class="y211">请输入您的备注要求，我们将要尽量满足你</span>
              </div>
           </div>
       </div>
       <div class="wei">
          <span>确定提交</span>
       </div>
    </div>
</template>
<script>
            import Vue from 'vue';
           import { ref } from 'vue';
            import { NavBar, Toast,Cell,Form,Field,Radio,RadioGroup} from 'vant';
            import 'vant/lib/index.css';
            Vue.use(Toast);
            Vue.use(NavBar);
             Vue.use(Cell);
             Vue.use(Form);
             Vue.use(Field);
             Vue.use(Radio);
             Vue.use(RadioGroup);
export default {
    data() {
    return {
        checked:{},
    };
  },
  setup() {
    const checked = ref('1');
    return { checked };
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
    
      this.show1 = false;
   
    },
  },
  
};
</script>
<style lang="scss" scoped>
.wei{
    border-width: 0px;
    position: relative;
    left: 0px;
    top: 0px;
    width: 245px;
    height: 42px;
    margin: 100px auto 0 auto;
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
.y24 .y211{
    color: #999999;
}
.y24{
    width: 100%;
    height: 49px;
    line-height: 49px;
border-bottom:1px solid #999999;
}
.y23 .y211{
    color: #999999;
}
.y23{
    width: 100%;
    height: 49px;
    line-height: 49px;
border-bottom:1px solid #999999;
}
.van-field{
    top: 2px;
    left: -16px;
    overflow: hidden;
}
.y22{
     width: 100%;
    height: 49px;
   overflow: hidden;
border-bottom:1px solid #999999;
}
.y21 .y211{
    color: #999999;
}
.y21{
    width: 100%;
    height: 49px;
    line-height: 49px;
border-bottom:1px solid #999999;
}
.y2{
    width: 100%;
    height: 218px;
    
    padding-left: 16px;
    text-align: left;
    font-size: 12px;
    padding-top: 5px;
    overflow: hidden;
    box-sizing: border-box;
}
.y1{
    width: 100%;
    height: 37px;
    overflow: hidden;
   text-align: left;
   padding-left: 16px;
   line-height: 37px;
   border-bottom:1px solid #999999;
   font-size:14px ;
}
.y{
    width: 100%;
    height: 255px;
    background-color: white;
    margin-top: 10px;
    color: #333333;
}
.z2 p{
    width: 100%;
    height: 32px;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 12px;
    color: #999999;
    text-align: left;
    line-height: 32px;
    margin: 0px;
}
.z2{
    width: 100%;
    height: 124px;
    overflow: hidden;
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    padding-left: 16px;
}
.z1{
    width: 100%;
    height: 37px;
   
    overflow: hidden;
//   margin-bottom: 10px;
   text-align: left;
   padding-left: 16px;
   line-height: 37px;
   border-bottom:1px solid #999999;
   font-size:14px ;
}
.z{
    width: 100%;
    height: 161px;
    background-color: white;
    margin-top: 10px;
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
</style>