// import { createI18n } from 'vue-i18n'
import { createI18n } from 'vue-i18n/dist/vue-i18n.cjs.js'
const messages = {
  en: {
    language: {
      zh: 'ZH',
      en: 'EN'
    },
    message: {
      hello: 'hello',
      name: 'name'
    },
    menu: {
      Home: 'Home',
      OrdersCenter: 'Orders Center',
      OrdersList: 'Orders List',
      GoodsCenter: 'Goods Center',
      GoodsList: 'Goods List',
      GoodsUpload: 'Goods Upload',
      UserCenter: 'User Center',
      UserInfo: 'User Info',
      Login: 'Login'
    },
    layout: {
      header: {
        tooltipExitFull: 'Exit Full Screen',
        tooltipEntryFull: 'Full Screen',
        fresh: 'Fresh'
      }
    }
  },
  zh: {
    language: {
      zh: '中文',
      en: '英文'
    },
    message: {
      hello: '你好',
      name: 'xingming'
    },
    menu: {
      Home: '首页',
      OrdersCenter: '订单管理',
      OrdersList: '订单列表',
      GoodsCenter: '商品管理',
      GoodsList: '商品列表',
      GoodsUpload: '商品上传',
      UserCenter: '用户中心',
      UserInfo: '用户信息',
      Login: '登录'
    },
    layout: {
      header: {
        tooltipExitFull: '退出全屏',
        tooltipEntryFull: '全屏',
        fresh: '刷新'
      }
    }
  }
}
const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages
})
export default i18n