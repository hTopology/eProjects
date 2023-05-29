<script setup lang="ts">
const modelValue = defineModel();
defineProps({
  lable: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
  >
    <input
      type="checkbox"
      v-model="modelValue"
      true-value="1"
      false-value="0"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="bordered-checkbox-1"
      class="w-full py-4 ml-2 font-medium text-gray-900 dark:text-gray-300 capitalize"
      >{{ lable }}</label
    >
  </div>
</template>
