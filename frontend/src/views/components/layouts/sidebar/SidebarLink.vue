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
      class="flex items-center gap-2 py-2 px-4 text-white text-lg font-bold capitalize"
    >
      <component :is="icon" class="fill-white" />
      <span v-if="showMenu">{{ linkName }}</span>
    </RouterLink>
  </li>
</template>
<style scoped>
.router-link-active.router-link-exact-active {
  background-color: #e6f0ed;
  color: #006749;
}
.router-link-active.router-link-exact-active svg {
  fill: #006749;
}
</style>
