<script setup lang="ts">
import MainInput from "../components/MainInput.vue";
import { required, helpers, email } from "@vuelidate/validators";

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
console.log(modelValue);
// const modalValue = defineModel();
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
</template>
