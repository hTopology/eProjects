<script setup lang="ts">
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div :class="[{ 'sm:ml-64': !showMenu }, { 'ml-14': showMenu }]" class="p-4">
    <div class="transition-all mt-14">
      <RouterView />
    </div>
  </div>
</template>
