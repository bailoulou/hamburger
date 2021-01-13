import Shop from '@/views/Shop/Index'
import Order from '@/views/Shop/Order'
import Queren from '@/views/Shop/Queren'
import Discount from '@/views/Shop/Discount'
import Line from '@/views/Shop/Line'
import Table from '@/views/Shop/Table'

var shop = [
    {
        path: "/shop",
        component: Shop,
        children: [
          // 点餐
          {path: "order", component: Order},
          // 确认订单
          {path:"queren",component:Queren},
          // 优惠券
          {path: "discount", component: Discount},
          // 排队取号
          {path: "line", component: Line},
          // 餐桌预定
          {path: "table", component: Table},
        ]
      },
]

export default shop
