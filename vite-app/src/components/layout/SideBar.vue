<template>
  <a-layout-sider class="layout-sidebar" v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo">LOGO</div>
    <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" v-model:openKeys="openKeys">
      <template v-for="(item, index) in canShowRoutes" :key="index">
        <a-sub-menu v-if="multiChildrenPath(item)" :key="item.path">
          <template #title>
            <user-outlined />
            <span>{{ $t('menu.'+item.name) }}</span>
          </template>
          <a-menu-item v-for="it in item.children" :key="it.name" @click="navTo(resolvePath(item.path, it.path))">
            <user-outlined />
            <span class="nav-text" :to="resolvePath(item.path, it.path)">{{ $t('menu.'+it.name) }}</span>
          </a-menu-item>
        </a-sub-menu>
        <!-- 只有一个子路由 -->
        <a-menu-item v-else-if="item.children && item.children.length === 1" :key="item.children[0].name" @click="navTo(item.path)">
          <user-outlined />
          <span class="nav-text" :to="item.path">{{ $t('menu.'+item.name) }}</span>
        </a-menu-item>
        <!-- 没有子路由 -->
        <a-menu-item v-else :key="item.name" @click="navTo(item.path)">
          <user-outlined />
          <span class="nav-text" :to="item.path">{{ $t('menu.'+item.name) }}</span>
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>
<script lang="ts">
import {
  UserOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref, computed } from 'vue';
import { routes } from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    UserOutlined
  },
  setup() {
    const currentName = useRoute().name as string
    const selectedKeys = ref<string[]>([currentName])
    const currentPath = useRoute().path as string
    const currentParentPath = '/'+currentPath.split('/')[1]
    const openKeys = ref<string[]>([currentParentPath])
    const store = useStore()
    const collapsed = computed(() => { return !store.state.isMobile && store.state.collapsed })
    const canShowRoutes:any[] = routes.filter((ele) => ele?.meta?.show)
    function multiChildrenPath(item:any):boolean {
      return item?.meta?.show && (!item.children || item.children.length > 1)
    }
    function resolvePath(p1:string, p2:string):string {
      return `${p1}/${p2}`
    }
    const router = useRouter()
    function navTo(path:string):void {
      router.push({ path })
    }
    return {
      collapsed,
      canShowRoutes,
      multiChildrenPath,
      resolvePath,
      selectedKeys,
      openKeys,
      currentName,
      navTo
    };

  }
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
</style>
