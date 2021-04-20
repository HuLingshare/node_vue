<template>
  <a-layout>
    <MobileSideBar v-if="isMobile"/>
    <SideBar v-else />
    <a-layout class="layout-inner">
      <LayoutHeader />
      <Tabs/>
      <a-layout-content class="layout-content">
        <div class="content-container">
          <div class="content-main">
            {{isMobile}}
            <router-view v-slot="{ Component, route }">
              <transition :name="getTransitionName({route})" mode="out-in">
                <component :is="Component" key="route.fullPath" />
              </transition>
            </router-view>
          </div>
          <LayoutFooter />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import MobileSideBar from '@/components/layout/MobileSideBar.vue'
import SideBar from '@/components/layout/SideBar.vue'
import Tabs from '@/components/layout/Tabs.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { isMobileFun } from '@/utils/common'
export default defineComponent({
  setup() {
    const store = useStore()
    window.addEventListener('resize', function() {
      store.commit('SET_ISMOBILE', isMobileFun())
    })
    const isMobile = computed(() => {
      return store.state.isMobile
    })
    function getTransitionName({ route }):string {
      // console.log(route)
      return 'fade-slide'
    }
    return {
      isMobile,
      getTransitionName
    }
  },
  components: {
    MobileSideBar,
    SideBar,
    LayoutHeader,
    LayoutFooter,
    Tabs
  },
});
</script>
<style scoped lang="less">
@import '../assets/css/transition/fade.less';
.layout-inner {
  flex: auto;
}
.layout-content {
  position: relative;
  height: calc(100vh - 64px);
  overflow-y: auto;
}
.content-container {
  width: 100%;
  background: #f0f2f5;
  padding-bottom: 90px;
  position: relative;
}
.content-main {
  margin: 20px 15px 0;
  text-align: center;
  min-height: calc(100vh - 174px);
}
</style>
