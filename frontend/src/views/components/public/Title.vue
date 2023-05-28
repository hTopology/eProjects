<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <h1 class="font-bold capitalize text-2xl">{{ title }}</h1>
</template>
