<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ $t('menu.' + route.name) }}
      </span>
      <router-link v-else :to="`/${paths.join('/')}`">
        {{ $t('menu.' + route.name) }}
      </router-link>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, unref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'LayoutBreadcrumb',
  components: {},
  setup() {
    let routes = ref([])
    const { currentRoute }  = useRouter()
    watchEffect(() => {
      routes.value = currentRoute.value.matched
    })
    return {
      routes
    }
  }
})
</script>