<template>
  <a-dropdown>
    <span @click.prevent>
      <LanguageIcon style="fontSize:18px;"/><DownOutlined />
    </span>
    <template #overlay>
      <a-menu v-model:selectedKeys="selectedKeys" @click="handleMenuClick">
        <a-menu-item key="1">
          {{ $t('language.zh' )}}
        </a-menu-item>
        <a-menu-item key="2">
          {{ $t('language.en') }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue'
import LanguageIcon from '/@/components/icons/components/Language.vue'
import { defineComponent, ref } from 'vue'
import userI18n from '/@/i181n/setupI18n'
interface str {
  key:string
}
export default defineComponent({
  name: 'SwitchLanguage',
  components: {
    DownOutlined,
    LanguageIcon
  },
  setup() {
    let selectedKeys = ref(['1'])
    function handleMenuClick({ key }:str):void {
      if (selectedKeys.value[0] === key) { return }
      selectedKeys.value = [key]
      switchLanguage(key)
    }
    function switchLanguage(key:string) {
      userI18n.global.locale = key === '1' ? 'zh' : 'en'
    }
    return {
      selectedKeys,
      handleMenuClick
    }
  }
})
</script>

<style lang='less' scoped>

</style>