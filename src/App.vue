<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {useStore} from '@/store'

export default {
  name: 'App',
  setup: () => {
    const store = useStore();
    store.dispatch("generateRoutes")
  }
}
</script>

<style></style>