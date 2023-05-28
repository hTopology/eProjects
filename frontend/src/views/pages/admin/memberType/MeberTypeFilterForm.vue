<script setup lang="ts">
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
  <MainInput
    type="text"
    :autofocus="true"
    v-model="filterFormData.MEMBER_TYPE_ID"
    lable="member type id"
  />
  <MainInput
    type="text"
    :autofocus="true"
    v-model="filterFormData.MEMBER_TYPE"
    lable="member type"
  />
</template>
