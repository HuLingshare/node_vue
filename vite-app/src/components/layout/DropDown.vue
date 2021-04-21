<template>
  <a-menu>
    <a-menu-item v-for="(item, index) in rightClickMenus" :key="index" :disabled="item.disabled" @click="item.clickFun">
      {{ item.text }}
    </a-menu-item>
  </a-menu>
</template>

<script lang="ts">
import { computed, defineComponent, toRaw } from 'vue'
import SvgIcon from '../icons/SvgIcon.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'Tabs',
  components: {
    SvgIcon
  },
  props: {
    indexVal: {
      default: -1
    },
    pane: {
      type: Object,
      default: () => { return {}}
    }
  },
  setup(props) {
    const { indexVal, pane }  = props
    const store = useStore()
    const activeKey = computed(() => store.getters.curPageKey)
    const cachePagesList = computed(() => store.getters.cachePagesList)
    const disabledCurClose = !pane.closable
    const disabledLeftClose = indexVal === 0 || indexVal === 1
    const disabledRightClose = indexVal === cachePagesList.value.length - 1
    const disabledOthersClose = cachePagesList.value.length === 1
    const disabledAllClose = cachePagesList.value.length === 1

    const router = useRouter()
    const closeCurrent = () => {
      if (activeKey.value === indexVal) { //删除当前活动tab
        const path = cachePagesList.value[indexVal - 1].path
        store.commit('SET_CURPAGE', path)
        router.push({ path })
      }
      store.commit('SET_CACHEPAGES_DEL', indexVal) // 修改chachePages
    }
    const closeLeft = () => {
      if (activeKey.value < indexVal && activeKey.value) { // 左侧有当前活动tab而且不是首页0,修改当前tab
        const path = cachePagesList.value[indexVal].path
        store.commit('SET_CURPAGE', path)
        router.push({ path })
      }
      store.commit('SET_CACHEPAGES_DELLEFT', indexVal)
    }
    const closeRight = () => {
      if (activeKey.value > indexVal) { // 右侧有当前活动tab,修改当前tab
        const path = cachePagesList.value[indexVal].path
        store.commit('SET_CURPAGE', path)
        router.push({ path })
      }
      store.commit('SET_CACHEPAGES_DELRIGHT', indexVal)
    }
    const closeOther = () => {
      store.commit('SET_CACHEPAGES_DELOTHERS', indexVal)
      const path = cachePagesList.value[cachePagesList.value.length - 1].path
      store.commit('SET_CURPAGE', path)
      router.push({ path })
    }
    const closeAll = () => {
      router.push({ path: '/home' })
      store.commit('SET_CURPAGE', '/home')
      store.commit('SET_CACHEPAGES_RESET')
    }
    const rightClickMenus = [{
      text: '关闭此标签页',
      disabled: disabledCurClose,
      clickFun: closeCurrent
    }, {
      text: '关闭左侧标签页',
      disabled: disabledLeftClose,
      clickFun: closeLeft
    }, {
      text: '关闭右侧标签页',
      disabled: disabledRightClose,
      clickFun: closeRight
    }, {
      text: '关闭其它标签页',
      disabled: disabledOthersClose,
      clickFun: closeOther
    }, {
      text: '关闭全部标签页',
      disabled: disabledAllClose,
      clickFun: closeAll
    }]
    return {
      rightClickMenus,
      closeCurrent,
      closeLeft,
      closeRight,
      closeOther,
      closeAll
    }
  }
})
</script>