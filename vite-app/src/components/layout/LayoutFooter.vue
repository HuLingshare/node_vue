<template>
  <a-layout-footer class="layout-footer">
    Ant Design ©2018 Created by Ant UED
  </a-layout-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {}
  },
  components: {}
});
</script>
<style scoped>
.layout-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #eee;
  border-top: 1px solid #ddd;
  text-align: center;
  z-index: 1;
}
</style>
