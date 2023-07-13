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
  <div class="flex items-center pl-4 border border-gray-200 rounded mb-3">
    <label
      :for="lable"
      class="w-full py-2 font-medium text-gray-900 dark:text-gray-300 capitalize flex gap-2 items-center"
      ><input
        type="checkbox"
        v-model="modelValue"
        true-value="1"
        false-value="0"
        :id="lable"
        class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      {{ lable }}</label
    >
  </div>
</template>
