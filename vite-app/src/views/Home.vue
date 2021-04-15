<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    {{list}}
    <button @click="changeList">changeList</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '/@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    let list = ref([])

    function changeList(): void {
      const arr = [1, 2, 3]
      /* eslint-disable */
      /* tslint:disable */
      // @ts-ignore
      list.value = arr
      console.log('list=>', list)
    }
    return {
      list,
      changeList
    }
  }
});
</script>
<style lang="less" scoped>
  .home {
    background: #fff;
    text-align: center;
    padding: 30px;
  }
</style>
