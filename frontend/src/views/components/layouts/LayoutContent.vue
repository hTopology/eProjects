<script setup lang="ts">
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="[{ 'md:ml-64': !showMenu }, 'ml-0']" class="p-4">
    <div class="transition-all mt-14">
      <RouterView />
    </div>
  </div>
</template>
