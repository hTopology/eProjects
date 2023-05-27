<script setup lang="ts">
import MainInput from "../components/MainInput.vue";
import { required, helpers, email } from "@vuelidate/validators";
import { ref, computed } from "vue";

const props = defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  isEmpty: Boolean,
  v$: { type: Object, required: true },
});

const modelValue = defineModel();
modelValue.value = {
  PROJECT: { required },
};
</script>

<template>
  <MainInput
    type="text"
    :autofocus="true"
    v-model="formData.PROJECT"
    lable="project *"
    :isEmpty="isEmpty"
    :validation="v$?.PROJECT"
  />
  <div
    class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700"
  >
    <input
      type="checkbox"
      v-model="formData.IS_ACTIVE"
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
</template>
