<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
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
const route = useRoute();
</script>
<template>
  <li class="text-sm">
    <RouterLink
      :to="link.to"
      :class="{ 'bg-primary text-white': route.path == link.to }"
      class="flex items-center gap-2 py-2 px-4 text-sidebarText font-bold capitalize rounded-lg"
    >
      <component
        :is="link.icon"
        class="fill-sidebarText w-6"
        :class="{ 'fill-white': route.path == link.to }"
      />
      <span :class="{ 'md:hidden ': !showMenu }">{{ link.linkName }}</span>
    </RouterLink>
  </li>
</template>
