<template>
  <div class="tabs-wrap">
    <div class="left">
      left
    </div>
    <div class="right">
      <a-dropdown class="block">
        <DownOutlined/>
         <template #overlay>
           <a-menu>
              <a-menu-item v-for="(item, index) in rightClickMenus" :key="index">
               <svg-icon name="visit-count" size="18"/> {{ item.text }}
              </a-menu-item>
           </a-menu>
         </template>
      </a-dropdown>
      <RedoOutlined class="block" :title="$t('layout.header.fresh')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RedoOutlined, DownOutlined } from '@ant-design/icons-vue'
import SvgIcon from '../icons/SvgIcon.vue'
export default defineComponent({
  name: 'Tabs',
  components: {
    DownOutlined,
    RedoOutlined,
    SvgIcon
  },
  setup() {
    const disabledFresh = false
    const disabledCurClose = false
    const disabledLeftClose = false
    const disabledRightClose = false
    const disabledOthersClose = false
    const disabledAllClose = false
    const rightClickMenus = [{
      text: '重新加载',
      disabled: disabledFresh
    }, {
      text: '关闭此标签页',
      disabled: disabledCurClose
    }, {
      text: '关闭左侧标签页',
      disabled: disabledLeftClose
    }, {
      text: '关闭右侧标签页',
      disabled: disabledRightClose
    }, {
      text: '关闭其他标签页',
      disabled: disabledOthersClose
    }, {
      text: '关闭全部标签页',
      disabled: disabledAllClose
    }]
    return {
      rightClickMenus
    }
  }
})
</script>

<style lang="less" scoped>
.tabs-wrap {
  width: 100%;
  background: #fff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    .block {
      width: 30px;
      height: 30px;
      line-height: 32px;
      border-left: 1px solid #ddd;
      cursor: pointer;
    }
  }
}
</style>