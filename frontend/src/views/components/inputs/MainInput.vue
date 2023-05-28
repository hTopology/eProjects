<script setup lang="ts">
import { onMounted, ref } from "vue";
const modelValue = defineModel();

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  lable: {
    type: String,
    required: true,
  },
  autofocus: {
    type: Boolean,
  },
  validation: Object,
  showErrorMessage: {
    type: Boolean,
    default: false,
  },
});
const input = ref();
onMounted(() => {
  if (props.autofocus) {
    input.value.focus();
  }
});
</script>
<template>
  <div class="mb-3">
    <div class="relative">
      <input
        :type="type"
        :id="lable"
        :class="[{ 'border-red-600': validation?.$errors.length }]"
        class="block bg-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-solid border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        ref="input"
        v-model="modelValue"
      />
      <label
        :for="lable"
        :class="{ 'text-red-600': validation?.$errors.length }"
        class="absolute capitalize text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
        >{{ lable }}</label
      >
    </div>
    <div v-if="validation && showErrorMessage">
      <div v-for="error of validation.$errors" :key="error.$uid">
        <div class="text-red-600">{{ error.$message }}</div>
      </div>
    </div>
  </div>
</template>
