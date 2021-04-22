<template>
  <a-sub-menu :key="menuInfo.key" v-bind="$attrs">
    <template #title>
      <span>
        <MailOutlined /><span>{{ $t('menu.'+menuInfo.name) }}</span>
      </span>
    </template>
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children">
        <a-menu-item :key="item.name" @click="navTo(resolvePath(menuInfo.path, item.path, item), item.name)">
          <PieChartOutlined />
          <span>{{ $t('menu.'+item.name) }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.path" :parent-path="menuInfo.path" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
} from '@ant-design/icons-vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
    parentPath: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const store = useStore()
    const router = useRouter()
    function resolvePath(p1:string, p2:string, item):string {
      if(p1 === '/') return `/${p2}`
      if(props.parentPath) return `${props.parentPath}/${p1}/${p2}`
      return `${p1}/${p2}`
    }
    function navTo(path:string, name:string):void {
      router.push({ path })
      store.commit('SET_CACHEPAGES', { path, name })
    }
    return {
      navTo,
      resolvePath
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined
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
</style>