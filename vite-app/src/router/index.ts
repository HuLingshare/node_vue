import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      show: false,
      icon: ''
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Home',
    meta: {
      show: true,
      icon: 'home'
    },
    children: [{
      path: 'home',
      name: 'Home',
      component: Home,
      meta: {
        show: true,
        icon: 'home'
      }
    }]
  },
  {
    path: '/ordersCenter',
    name: 'OrdersCenter',
    component: Layout,
    redirect: '/ordersCenter/ordersList',
    meta: {
      show: true,
      icon: 'order'
    },
    children: [{
      path: 'ordersList',
      name: 'OrdersList',
      component: () => import(/* webpackChunkName: "UploadImagesIndex" */ '../views/OrdersList.vue'),
      meta: {
        show: true,
        icon: ''
      }
    }]
  },
  {
    path: '/goodsCenter',
    name: 'GoodsCenter',
    component: Layout,
    redirect: '/goodsCenter/goodsList',
    meta: {
      show: true,
      icon: 'goods'
    },
    children: [{
      path: 'goodsList',
      name: 'GoodsList',
      component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsList.vue'),
      meta: {
        show: true,
        icon: 'goods'
      }
    },{
      path: 'goodsUpload',
      name: 'GoodsUpload',
      component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsUpload.vue'),
      meta: {
        show: true,
        icon: 'goods'
      }
    }]
  },
  {
    path: '/userCenter',
    name: 'UserCenter',
    component: Layout,
    redirect: '/userCenter/userInfo',
    meta: {
      show: true,
      icon: 'user'
    },
    children: [{
      path: 'userInfo',
      name: 'UserInfo',
      component: () => import(/* webpackChunkName: "UserInfo" */ '../views/UserInfo.vue'),
      meta: {
        show: true,
        icon: 'user'
      }
    }]
  },
  {
    path: '/404',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (login.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/404.vue'),
    meta: {
      show: false,
      icon: ''
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'notFound',
    meta: {
      show: false,
      icon: ''
    }
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
