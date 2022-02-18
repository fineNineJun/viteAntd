<template>
  <a-layout-sider v-model:collapsed="isCollapse" collapsible>
    <LayoutLogo/>
    <LayoutMenu/>
  </a-layout-sider>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useStore} from "@/store";
import LayoutLogo from './logo.vue'
import LayoutMenu from "./menu.vue";
// import {PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  name: 'LayoutSide',
  components: {
    LayoutMenu,
    LayoutLogo
  },
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.settings.isCollapse)

    return {
      isCollapse
    }
  }
})
</script>

<style scoped></style>