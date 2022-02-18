<template>
  <a-layout-header style="background: #fff; padding: 0;">
    <!--<menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)"/>-->
    <!--<menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>-->
    <Icon icon="MenuUnfoldOutlined" v-if="isCollapse" class="trigger" @click="toggleCollapse" />
    <Icon icon="MenuFoldOutlined" v-else class="trigger" @click="toggleCollapse" />
  </a-layout-header>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import {useStore} from "store/index";

export default defineComponent({
  name: "layoutHeader",
  setup() {
    const store = useStore()
    const isCollapse = computed(() => store.state.settings.isCollapse);
    const toggleCollapse = () => {
      store.commit("TOGGLE_COLLAPSE")
    }

    return {
      isCollapse,
      toggleCollapse
    }
  }
})
</script>

<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
}
</style>