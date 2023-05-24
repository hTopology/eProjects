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
      class="flex items-center p-2 text-white text-lg font-bold capitalize"
    >
      <component :is="icon" class="fill-white" />
      <span class="ml-3" v-if="!showMenu">{{ linkName }}</span>
    </RouterLink>
  </li>
</template>
<style>
.router-link-active.router-link-exact-active {
  background-color: #e6f0ed;
  color: #006749;
}
.router-link-active.router-link-exact-active svg {
  fill: #006749;
}
</style>
