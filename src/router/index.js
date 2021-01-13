import Vue from 'vue'
import VueRouter from 'vue-router'
// import Shop from '@/views/Shop/Index'


Vue.use(VueRouter)

import shopRouter from './routes/shop'
import orderRouter from './routes/order'
import discountRouter from './routes/discount'
import lineRouter from './routes/line'
import tableRouter from './routes/table'
import confirmRouter from './routes/confirm'
import centerRouter from './routes/center'
import myDiscountRouter from './routes/myDiscount'
import myOrderRouter from './routes/myOrder'
import myLineRouter from './routes/myLine'
import querenRouter from './routes/queren'
import shopyRouter from './routes/shopy'

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

export default router
