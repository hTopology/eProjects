<script setup lang="ts">
import MainInput from "../components/MainInput.vue";
defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  isEmpty: Boolean,
});
// const modalValue = defineModel();
</script>

<template>
  <MainInput
    type="text"
    :autofocus="true"
    v-model="formData.PROJECT"
    lable="project *"
    :isEmpty="isEmpty"
    :required="true"
  />
</template>
