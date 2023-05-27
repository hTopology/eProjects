<script setup lang="ts">
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <li>
    <RouterLink
      :to="to"
      class="flex items-center gap-2 py-2 px-4 text-sidebarText text-sm font-bold capitalize rounded-lg"
    >
      <component :is="icon" class="fill-sidebarText" />
      <span v-if="showMenu">{{ linkName }}</span>
    </RouterLink>
  </li>
</template>
<style scoped>
.router-link-active.router-link-exact-active {
  background-color: #006749;
  color: #fff;
}
.router-link-active.router-link-exact-active svg {
  fill: #fff;
}
</style>
