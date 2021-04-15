<template>
  <div class="parent">
    userInfo
  {{ $t("message.hello") }}
  {{ $t("message.name") }}
  <div style="width: 100%; height: 900px; background: #f60;">ss</div>
  <hr/>
  <button @click="changeLanguage">changeLanguage</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import i18n from '../i181n/setupI18n'
export default defineComponent({
  components: {},
  setup() {
    function changeLanguage():void {
      i18n.global.locale = i18n.global.locale === 'en' ? 'zh' : 'en'
    }
    return {
      changeLanguage
    }
  }
});
</script>
<style lang="less" scoped>

</style>
