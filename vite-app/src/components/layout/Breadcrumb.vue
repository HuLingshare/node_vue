<template>
  <a-breadcrumb :routes="routes">
    <template #itemRender="{ route, routes, paths }">
      <span v-if="routes.indexOf(route) === routes.length - 1">
        {{ $t('menu.' + route.name) }}
      </span>
      <router-link v-else :to="`/${paths.join('/')}`">
        {{ $t('menu.' + route.name) }}
      </router-link>
      <!-- <span v-else @click="navTo(paths)">
        {{ $t('menu.' + route.name) }} {{paths}}
      </span> -->
    </template>
  </a-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, ref, unref, watchEffect, toRaw } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'LayoutBreadcrumb',
  components: {},
  setup() {
    let routes = ref([])
    const router = useRouter()
    const { currentRoute }  = useRouter()
    watchEffect(() => {
      const routeMatched = currentRoute.value.matched
      const routeList = routeMatched.map(ele => {
        ele.path = ele.path.split('/').pop()
        return ele
      })
      routes.value = routeList
    })
    // const navTo = (paths) => {
    //   // console.log(`/${paths.join('/')}`)
    //   router.push({ path: `/${paths.join('/')}` })
    // }
    return {
      routes,
      // navTo
    }
  }
})
</script>