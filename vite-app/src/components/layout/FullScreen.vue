<template>
  <Tooltip :title="title" placement="bottom" :mouseEnterDelay="0.5">
    <span @click="toggle">
      <FullscreenOutlined v-if="!isFullscreen" />
      <FullscreenExitOutlined v-else />
    </span>
  </Tooltip>
</template>

<script lang="ts">
import { Tooltip } from 'ant-design-vue'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref, computed } from 'vue'
import userI18n from '/@/i181n/setupI18n'
import { fullScreen, exitFullscreen } from '/@/utils/common'
export default defineComponent({
  name: 'FullScreen',
  components: {
    Tooltip,
    FullscreenExitOutlined,
    FullscreenOutlined
  },

  setup() {
    let isFullscreen = ref(false)
    const { t } = userI18n.global
    const title = computed(() => {
      return isFullscreen.value ? t('layout.header.tooltipExitFull') :  t('layout.header.tooltipEntryFull')
    })
    function toggle():void {
      isFullscreen.value = !isFullscreen.value
      isFullscreen.value ? fullScreen() : exitFullscreen()
    }
    return {
      title,
      isFullscreen,
      toggle
    }
  }
})
</script>

<style lang='less' scoped>

</style>