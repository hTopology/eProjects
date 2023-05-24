<script setup lang="ts">
defineProps({
  labelName: String,
  type: {
    type: String,
    required: true,
  },
});
const modelValue = defineModel();
</script>
<template>
  <div>
    <label :for="labelName" class="capitalize block mb-3">{{
      labelName
    }}</label>
    <input
      :id="labelName"
      v-model="modelValue"
      :type="type"
      :placeholder="'Enter ' + labelName"
      class="border border-border_color outline-primary w-full p-3 rounded-md text-sm"
    />
  </div>
</template>
