<script setup lang="ts">
import MainInput from "../components/MainInput.vue";

defineProps({
  filterFormData: {
    type: Object,
    requried: true,
    default: {},
  },
});
</script>

<template>
  <div class="flex gap-4 flex-wrap">
    <MainInput
      type="text"
      :autofocus="true"
      v-model="filterFormData.PROJECT_ID"
      lable="project id"
      class="mt-1 flex-auto"
    />
    <div
      class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 flex-auto"
    >
      <input
        type="checkbox"
        v-model="filterFormData.IS_ACTIVE"
        true-value="1"
        false-value="0"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        for="bordered-checkbox-1"
        class="w-full py-4 ml-2 font-medium text-gray-900 dark:text-gray-300 capitalize"
        >is active</label
      >
    </div>
  </div>
  <MainInput type="text" v-model="filterFormData.PROJECT" lable="project" />
</template>
