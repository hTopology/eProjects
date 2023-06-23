<script setup lang="ts">
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <li class="text-sm">
    <RouterLink :to="link.to" class="flex items-center gap-2 py-2 px-4 text-sidebarText  font-bold capitalize rounded-lg">
      <component :is="link.icon" class="fill-sidebarText w-6" />
      <span v-if="showMenu">{{ link.linkName }}</span>
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
