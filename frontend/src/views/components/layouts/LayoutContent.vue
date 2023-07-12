<script setup lang="ts">
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="transition-all">
      <RouterView />
    </div>
  </div>
</template>
