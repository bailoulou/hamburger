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
<<<<<<< HEAD
import bushaRouter from './routes/busha'
import shabaRouter from './routes/shaba'

=======
import querenRouter from './routes/queren'
import shopyRouter from './routes/shopy'
>>>>>>> 1c20e6489edf9cfe3183060cf9412d6034659397

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
<<<<<<< HEAD
  shabaRouter,
=======
<<<<<<< HEAD
  shabaRouter,
  bushaRouter,

=======
  querenRouter,
  shopyRouter,
>>>>>>> 1c20e6489edf9cfe3183060cf9412d6034659397
>>>>>>> 82f1e3afb0bf5389fe0bbbf6b0aa953483444a9f
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
