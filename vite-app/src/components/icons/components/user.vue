<template>
  <Icon>
    <template #component>
      <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 130 130">
      <path pid="0" d="M63.4 65c20.7 0 37.4-14.3 37.4-32 0-17.6-16.7-32-37.4-32-20.6 0-37.3 14.4-37.3 32 0 17.7 16.7 32 37.3 32zm17.2 10.7H49.4C22.8 75.7 1.2 94 1.2 116.9v2.7c0 9.3 21.6 9.3 48.2 9.3h31.2c26.6 0 48.2-.3 48.2-9.3v-2.7c0-22.8-21.6-41.2-48.2-41.2z" _stroke="#979797"/>
      </svg>
    </template>
  </Icon>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Icon from '@ant-design/icons-vue';
export default defineComponent({
  name: 'UserIcon',
  components: {
    Icon,
  }
});
</script>
