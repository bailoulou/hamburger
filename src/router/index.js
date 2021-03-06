import Vue from 'vue'
import VueRouter from 'vue-router'
// import Shop from '@/views/Shop/Index'


Vue.use(VueRouter)

import shopRouter from './routes/shop'
import orderRouter from './routes/order'
import discountRouter from './routes/discount'
import lineRouter from './routes/line'
import tableRouter from './routes/table'
import shabaRouter from './routes/shaba'
import confirmRouter from './routes/confirm'
import centerRouter from './routes/center'
import myDiscountRouter from './routes/myDiscount'
import myOrderRouter from './routes/myOrder'
import myLineRouter from './routes/myLine'
// import bushaRouter from './routes/busha'
// import shabaRouter from './routes/shaba'
import querenRouter from './routes/queren'
import shopyRouter from './routes/shopy'

import bushaRouter from './routes/busha'
// import shabaRouter from './routes/shaba'

// import querenRouter from './routes/queren'
// import shopyRouter from './routes/shopy'


const routes = [
  // {
  //   path: "/shop",
  //   component: Shop,
  //   children: [
  //     // 点餐
  //     {path: "order", component: Order},
  //     // 优惠券
  //     {path: "discount", component: Discount},
  //     // 排队取号
  //     {path: "line", component: Line},
  //     // 餐桌预定
  //     {path: "table", component: Table},
  //   ]
  // },
  {
    path: "/",
    redirect: "/shop"
  },
  shopRouter,
  centerRouter,
  orderRouter,
  discountRouter,
  lineRouter,
  tableRouter,
  confirmRouter,
  myDiscountRouter, 
  myOrderRouter,
  myLineRouter,
  shabaRouter,
  bushaRouter,
  querenRouter,
  shopyRouter,

  // shabaRouter,


  shabaRouter,
  bushaRouter,


  querenRouter,
  shopyRouter,


  // {
  //   path: "/center",
  //   component: Center
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    let quanxian = ['/order', '/discount', '/table', '/center' ]
    const dis = JSON.parse(window.localStorage.getItem('tableNum'))
    if(dis){
      next()
    }else{
      if(quanxian.includes(to.path)){
          router.push({path: '/line'})
      }
      next()
    }
})

export default router
