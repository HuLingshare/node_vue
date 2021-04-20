<template>
    <a-layout-header class="layout-header">
      <div class="left">
        <span @click="toggleCollapsed" class="fold-btn">
          <MenuUnfoldOutlined v-if="collapsed" />
          <MenuFoldOutlined v-else />
        </span>
        <Breadcrumb class="ml10"/>
      </div>
      <div class="right">
        <!-- 语言切换 + 全屏 + 个人信息 + 配置 + 搜索 + 通知 -->
        <SwitchLanguage class="ml10"/>
        <FullScreen class="ml10"/>
      </div>
    </a-layout-header>
</template>
<script lang="ts">
import Breadcrumb from '/@/components/layout/Breadcrumb.vue'
import FullScreen from '/@/components/layout/FullScreen.vue'
import SwitchLanguage from '/@/components/layout/SwitchLanguage.vue'
import SvgIcon from '@/components/icons/SvgIcon.vue' // svg精灵图组件
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    SwitchLanguage,
    FullScreen,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    Breadcrumb,
    SvgIcon
  },
  setup() {
    const store = useStore()
    const collapsed = computed(() => store.state.collapsed)
    const isMobile = computed(() => store.state.isMobile)
    const mobileShowSideBar = computed(() => store.state.mobileShowSideBar)
    function toggleCollapsed():void{
      isMobile.value && store.commit('SET_MOBILESHOWSIDEBAR', !mobileShowSideBar.value)
      !isMobile.value && store.dispatch('handlerSetCollapsed', !collapsed.value)
    }
    return {
      collapsed,
      toggleCollapsed
    }
  }
});
</script>
<style lang="less" scoped>
.layout-header {
  background: #fff;
  padding: 0 20px;
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  :deep(.ml10) {
    margin-left: 10px;
    vertical-align: middle;
  }
  .fold-btn {
    cursor: pointer;
  }
}
</style>
