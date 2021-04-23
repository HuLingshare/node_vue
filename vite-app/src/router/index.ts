import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../views/Layout.vue'
import YBLayout from '../views/YBLayout.vue'
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
      icon: 'login'
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Workbench',
    meta: {
      show: false,
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
    path: '/yb',
    name: 'yb',
    component: Layout,
    redirect: '/yb/ordersCenter/ordersList',
    meta: {
      show: true,
      icon: 'yb'
    },
    children: [
      {
        path: 'ordersCenter',
        name: 'OrdersCenter',
        component: YBLayout,
        redirect: '/yb/ordersCenter/ordersList',
        meta: {
          show: true,
          icon: 'order-center'
        },
        children: [{
          path: 'ordersList',
          name: 'OrdersList',
          component: () => import(/* webpackChunkName: "UploadImagesIndex" */ '../views/OrdersList.vue'),
          meta: {
            show: true,
            icon: 'order-list'
          }
        }]
      },
      {
        path: 'goodsCenter',
        name: 'GoodsCenter',
        component: YBLayout,
        redirect: '/yb/goodsCenter/goodsList',
        meta: {
          show: true,
          icon: 'goods-center'
        },
        children: [{
          path: 'goodsList',
          name: 'GoodsList',
          component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsList.vue'),
          meta: {
            show: true,
            icon: 'goods-list'
          }
        },{
          path: 'goodsUpload',
          name: 'GoodsUpload',
          component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsUpload.vue'),
          meta: {
            show: true,
            icon: 'goods-upload'
          }
        }]
      },
      {
        path: 'userCenter',
        name: 'UserCenter',
        component: YBLayout,
        redirect: '/yb/userCenter/userInfo',
        meta: {
          show: true,
          icon: 'user-center'
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
      }
    ]
  },
  {
    path: '/components',
    name: 'Components',
    component: Layout,
    redirect: '/components/modal',
    meta: {
      show: true,
      icon: 'yb'
    },
    children: [{
      path: 'modal',
      name: 'Modal',
      component: () => import(/* webpackChunkName: "UploadImagesIndex" */ '../views/Modal.vue'),
      meta: {
        show: true,
        icon: ''
      }
    }]
  },
  // {
  //   path: '/goodsCenter',
  //   name: 'GoodsCenter',
  //   component: Layout,
  //   redirect: '/goodsCenter/goodsList',
  //   meta: {
  //     show: true,
  //     icon: 'goods'
  //   },
  //   children: [{
  //     path: 'goodsList',
  //     name: 'GoodsList',
  //     component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsList.vue'),
  //     meta: {
  //       show: true,
  //       icon: 'goods'
  //     }
  //   },{
  //     path: 'goodsUpload',
  //     name: 'GoodsUpload',
  //     component: () => import(/* webpackChunkName: "GoodsList" */ '../views/GoodsUpload.vue'),
  //     meta: {
  //       show: true,
  //       icon: 'goods'
  //     }
  //   }]
  // },
  // {
  //   path: '/userCenter',
  //   name: 'UserCenter',
  //   component: Layout,
  //   redirect: '/userCenter/userInfo',
  //   meta: {
  //     show: true,
  //     icon: 'user'
  //   },
  //   children: [{
  //     path: 'userInfo',
  //     name: 'UserInfo',
  //     component: () => import(/* webpackChunkName: "UserInfo" */ '../views/UserInfo.vue'),
  //     meta: {
  //       show: true,
  //       icon: 'user'
  //     }
  //   }]
  // },
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
