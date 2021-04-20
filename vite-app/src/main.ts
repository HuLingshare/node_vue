import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import i18n from './i181n/setupI18n'
import 'vite-plugin-svg-icons/register'

createApp(App)
.use(Antd)
.use(router)
.use(store)
.use(i18n)
.mount('#app')
