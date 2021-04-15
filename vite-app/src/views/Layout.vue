<template>
  <a-layout>
    <SideBar />
    <a-layout class="layout-inner">
      <LayoutHeader />
      <a-layout-content class="layout-content">
        <div class="content-container">
          <div class="content-main">
            <router-view />
          </div>
          <LayoutFooter />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import SideBar from '/@/components/layout/SideBar.vue'
import LayoutHeader from '/@/components/layout/LayoutHeader.vue'
import LayoutFooter from '/@/components/layout/LayoutFooter.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {}
  },
  components: {
    SideBar,
    LayoutHeader,
    LayoutFooter
  },
});
</script>
<style scoped>
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
