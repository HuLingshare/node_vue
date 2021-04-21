<template>
  <div class="tabs-wrap">
    <div class="left">
      <a-tabs
        type="editable-card"
        tab-position="top"
        size="small"
        v-model:activeKey="activeKey"
        :hide-add="true"
        :style="{ height: '30px' }"
        @change="changePane"
        @edit="removePane"
      >
        <a-tab-pane v-for="(pane, index) in cachePagesList" :key="index" :closable="pane.closable">
          <template #tab>
            <a-dropdown class="block" :trigger="['contextmenu']" @visibleChange="visibleChange">
              <span>{{ $t('menu.'+pane.name) }}</span>
              <template #overlay>
                <DropDownMenu  v-if="dropdownMenuVisible" :pane="pane" :index-val="index"/>
              </template>
            </a-dropdown>
          </template>
        </a-tab-pane> 
      </a-tabs>
    </div>
    <div class="right">
      <RedoOutlined class="block" :title="$t('layout.header.fresh')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { RedoOutlined, DownOutlined } from '@ant-design/icons-vue'
import SvgIcon from '../icons/SvgIcon.vue'
import DropDownMenu from './DropDown.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Tabs',
  components: {
    DownOutlined,
    RedoOutlined,
    SvgIcon,
    DropDownMenu
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const activeKey = computed(() => store.getters.curPageKey)
    const cachePagesList = computed(() => store.getters.cachePagesList)
    const changePane = (activekey: string) => {
      const path = cachePagesList.value[activekey].path
      router.push({ path })
    }
    const removePane = (targetkey:nubmer) => {
      if (activeKey.value === targetkey) { //删除当前活动tab
        const path = cachePagesList.value[targetkey - 1].path
        router.push({ path })
      }
      store.commit('SET_CACHEPAGES_DEL', targetkey) // 修改chachePages
    }
    const dropdownMenuVisible = ref(true)
    let visibleChange = (visible) => {
      dropdownMenuVisible.value = visible
    }
    return {
      changePane,
      removePane,
      activeKey,
      cachePagesList,
      visibleChange,
      dropdownMenuVisible
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
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  .left {
    width: calc(~'100% - 50px');
    flex:1;
  }
  .right {
    width: 30px;
    flex: none;
    .block {
      width: 30px;
      height: 30px;
      line-height: 32px;
      border-left: 1px solid #ddd;
      cursor: pointer;
    }
  }
}
:deep(.ant-tabs-bar) {
  border: none;
}
:deep(.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-nav-container) {
  height: 30px;
}
:deep(.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab) {
  height: 30px;
  line-height: 28px;
}
:deep(.ant-tabs-nav .ant-tabs-tab-active) {
  font-weight: normal;
}
:deep(.ant-tabs.ant-tabs-card .ant-tabs-card-bar .ant-tabs-tab-active) {
  border-bottom:1px solid #f0f0f0;
}
</style>