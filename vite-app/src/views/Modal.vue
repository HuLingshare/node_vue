<template>
  <div>
    <button @click="openModal">toggle ComponentModal visible</button>
    <Modal v-model:visible="modalVisible"/>
  </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from '@/components/Modal/Modal.vue'

export default defineComponent({
  name: 'ComponentModal',
  components: { Modal },
  setup() {
    const modalVisible = ref<boolean>(false)
    const openModal = () => {
      modalVisible.value = !modalVisible.value
    }
    return {
      modalVisible,
      openModal
    }
  }
})
</script>