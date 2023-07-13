<script setup lang="ts">
const modelValue: any = defineModel();

defineProps({
  lable: {
    type: String,
  },
  defaultOption: { type: String, default: "" },
  validation: Object,
});
</script>
<template>
  <div>
    <label v-if="lable" class="block text-sm font-medium text-gray-900">{{
      lable
    }}</label>
    <select
      v-model="modelValue"
      :class="[{ 'border-red-600': validation?.$errors.length }]"
      class="bg-transparent outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option value="undefined" selected>
        choose {{ " " + defaultOption }} ...
      </option>
      <slot></slot>
    </select>
  </div>
</template>
