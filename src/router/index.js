import Vue from 'vue'
import VueRouter from 'vue-router'
import Shop from '@/views/Shop/Index'


Vue.use(VueRouter)

import shopRouter from './routes/shop'
import centerRouter from './routes/center'


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
  ...shopRouter,
  centerRouter
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
