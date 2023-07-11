<script setup lang="ts">
const props = defineProps({
  headText: String,
  bodyText: String,
});
</script>
<template>
  <div
    class="flex-auto border-b md:border-b-0 md:border-r border-third px-6 text-center text-sm"
  >
    <p class="font-bold mb-4 capitalize" v-if="headText">{{ headText }}</p>
    <slot></slot>
  </div>
</template>
