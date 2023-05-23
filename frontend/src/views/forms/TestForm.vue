<script setup lang="ts">
defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  isEmpty: Boolean,
});
const modalValue = defineModel();
</script>

<template>
  <input type="text" />
</template>
