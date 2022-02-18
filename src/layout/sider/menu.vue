<template>
  <a-menu theme="dark" mode="inline">
    <template v-for="item in menus" :key="item.name">
      <template v-if="!item.children">
        <a-menu-item :key="item.name">
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </template>
      <template v-else>
        <LayoutSubMenu :menu-info="item" :key="item.name"/>
      </template>
    </template>
  </a-menu>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import {useStore} from "store/index";
import LayoutSubMenu from "./subMenu.vue"

export default defineComponent({
  name: 'layoutMenu',
  components: {
    LayoutSubMenu
  },
  setup() {
    const store = useStore();
    const routes = computed(() => store.state.routes.routes);
    const menus = computed(() => store.state.routes.menus);

    return {
      routes,
      menus
    };
  }
})
</script>

<style lang="scss" scoped></style>