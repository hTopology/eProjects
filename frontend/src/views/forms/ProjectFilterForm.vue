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
  <MainInput
    type="text"
    :autofocus="true"
    v-model="filterFormData.PROJECT_ID"
    lable="project id"
  />
  <MainInput
    type="text"
    :autofocus="true"
    v-model="filterFormData.PROJECT"
    lable="project"
  />
</template>
