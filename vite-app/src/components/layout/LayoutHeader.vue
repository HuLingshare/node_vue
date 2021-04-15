<template>
    <a-layout-header class="layout-header">
      <span @click="toggleCollapsed">
        <MenuUnfoldOutlined v-if="collapsed" />
        <MenuFoldOutlined v-else />
      </span>
      <div class="right">
        <!-- 语言切换 + 全屏 + 个人信息 + 配置 + 搜索 + 通知 -->
        <SwitchLanguage />
        <FullScreen />
      </div>
    </a-layout-header>
</template>
<script lang="ts">
import FullScreen from '/@/components/layout/FullScreen.vue'
import SwitchLanguage from '/@/components/layout/SwitchLanguage.vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    SwitchLanguage,
    FullScreen,
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup() {
    const store = useStore()
    const collapsed = computed(() => store.state.collapsed)
    function toggleCollapsed():void{
      store.dispatch('handlerSetCollapsed', !collapsed.value)
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
  .right {
    > div, > span {
      margin-left: 10px;
    }
  }
}
</style>
