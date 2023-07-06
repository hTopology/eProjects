<script setup lang="ts">
const modelValue: any = defineModel();

defineProps({
  lable: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div>
    <label class="block text-sm font-medium text-gray-900">{{ lable }}</label>
    <select
      v-model="modelValue"
      class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="undefined" selected>Choose...</option>
      <slot></slot>
    </select>
  </div>
</template>
