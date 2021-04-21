<template>
  <router-view v-slot="{ Component }">
    <transition name="router-fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import { defineComponent, watch, unref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import userI18n from './i181n/setupI18n'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { currentRoute } = useRouter()
    const { t } = userI18n.global
    const store = useStore()
    const cachePagesList = computed(() => store.getters.cachePagesList)
    
    // 修改文档title,保存当前路由
    watch(() => currentRoute.value.path, () => {
        const route = unref(currentRoute)
        const tTitle = route?.name as string
        const title = tTitle ? t('menu.' + tTitle) : 'vue3-hl'
        document.title = title
        const path = route.fullPath
        const key = cachePagesList.value.findIndex(ele => ele.path === path)
        if (key === -1 && path !== '/') {
          const name = route.name
          store.commit('SET_CACHEPAGES', { path, name })
        }
        store.commit('SET_CURPAGE', path)
    }, {
      immediate: true
    })
    return {}
  }
})
</script>
<style lang="less">
@import './assets/css/common.less';
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  > div {
    width: 100%;
    min-height: 100vh;
  }
}
.router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .2s ease;
}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}

</style>
