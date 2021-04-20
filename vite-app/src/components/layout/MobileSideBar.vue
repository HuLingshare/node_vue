<template>
  <a-drawer
    width="200"
    placement="left"
    :closable="false"
    wrapClassName="mobile-sidebar"
    :visible="mobileShowSideBar"
    @close="closeDrawer"
  > 
    <SideBar/>
  </a-drawer>
</template>

<script lang="ts">
import SideBar from '@/components/layout/SideBar.vue'
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    SideBar
  },
  setup() {
    const store = useStore()
    const mobileShowSideBar = computed(() => store.state.mobileShowSideBar)
    const closeDrawer = (e) => {
      store.commit('SET_MOBILESHOWSIDEBAR', !mobileShowSideBar.value)
    }
    return {
      mobileShowSideBar,
      closeDrawer
    }
  }
})
</script>

<style lang='less'>
.mobile-sidebar {
  .ant-drawer-body {
    padding: 0;
  }
}
</style>