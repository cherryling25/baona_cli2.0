import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: () =>
        import("../views/Home.vue"),
        children: [
          {
            path: "/orderManage",
            name: "orderManage",
            component: () => import('../components/orderManage.vue')
          },
          {
            path: "/taskManage",
            name: "taskManage",
            component: () => import('../components/taskManage.vue')
          },
          {
            path: "/invite",
            name: "invite",
            component: () => import('../components/invite.vue')
          },
          {
            path: "/shopInfo",
            name: "shopInfo",
            component: () => import('../components/shopInfo.vue')
          },
          {
            path: "/transactionDetail",
            name: "transactionDetail",
            component: () => import('../components/transactionDetail.vue')
          },
          {
            path: "/appealCenter",
            name: "appealCenter",
            component: () => import('../components/appealCenter.vue')
          },
          {
            path: "/blacklist",
            name: "blacklist",
            component: () => import('../components/blacklist.vue')
          },
          {
            path: "/publish",
            name: "publish",
            component: () => import('../components/publish.vue')
          },
          {
            path: "/sellerCenter",
            name: "sellerCenter",
            component: () => import('../components/sellerCenter.vue')
          }
        ]
    }
  ]
})
