<template>
  <a-layout-content style="margin: 0 16px">
    <LayoutBreadcrumb/>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </div>
  </a-layout-content>
</template>

<script>
import {defineComponent} from "vue";
import LayoutBreadcrumb from "./breadcrumb.vue";

export default defineComponent ({
  name: "layoutMain",
  components: {LayoutBreadcrumb},
  data() {
    return {}
  }
})
</script>

<style scoped>

</style>