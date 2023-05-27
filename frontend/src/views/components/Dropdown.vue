<script setup lang="ts">
const modelValue: any = defineModel();
defineProps({
  options: Object,
});
</script>
<template>
  <select v-model="modelValue" class="outline-none h-full bg-transparent">
    <option v-for="option in options" :value="option.value">
      {{ option.key }}
    </option>
  </select>
</template>
