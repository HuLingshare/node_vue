<template>
  <a-layout-sider class="layout-sidebar" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" @click="navToHome">LOGO</div>
    <a-menu
      :selectedKeys="selectedKeys" 
      v-model:openKeys="openKeys"
      mode="inline"
      theme="dark"
    >
      <template v-for="item in canShowRoutes">
        <template v-if="!item.children">
          <a-menu-item :key="item.name" @click="navTo(item.path, item.name)">
            <span class="icon-font"><SvgIcon :name="item.meta.icon" color="#eee"/></span>
            <span class="nav-text" :to="item.path">{{ $t('menu.'+item.name) }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { routes } from '@/router'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import SvgIcon from '@/components/icons/SvgIcon.vue'
import SubMenu from './SubMenu.vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const collapsed = computed(() => { return !store.state.isMobile && store.state.collapsed })
    const canShowRoutes:any[] = routes.filter((ele) => ele?.meta?.show)
    const router = useRouter()
    function navTo(path:string, name:string):void {
      router.push({ path })
      store.commit('SET_CACHEPAGES', { path, name })
    }
    const navToHome = () => {
      navTo('/home', 'Home')
    }
    const currentPath = useRoute().path as string
    const currentParentPath = '/'+currentPath.split('/')[1]
    const openKeys = ref<string[]>([currentParentPath]) // 初始化展开的menu
    const selectedKeys = computed(() => [store.getters.curPageName]) // 选中的menu随路由变化

    return {
      canShowRoutes,
      collapsed,
      navTo,
      navToHome,
      openKeys,
      selectedKeys
    };
  },
  components: {
    SvgIcon,
    'sub-menu': SubMenu,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  },
});
</script>
<style scoped>
.ant-layout-sider-children .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  line-height: 32px;
}
.layout-sidebar {
  overflow: auto;
  height: 100vh;
}
.ant-menu-item {
  display: flex;
  flex: row nowrap;
  align-items: center;
}
.nav-text {
  color: inherit;
}
.logo {
  cursor: pointer;
}
.icon-font {
  display: inline-block;
  margin-right: 5px;
  color: red;
  vertical-align: middle;
  :deep(svg) {
    fill: red;
  }
}
</style>