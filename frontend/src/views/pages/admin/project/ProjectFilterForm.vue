<script setup lang="ts">
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";

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
    <CheckBox lable="is active" v-model="filterFormData.IS_ACTIVE" />
  </div>
  <MainInput type="text" v-model="filterFormData.PROJECT" lable="project" />
</template>
