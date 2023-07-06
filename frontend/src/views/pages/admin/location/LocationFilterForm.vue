<script setup lang="ts">
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";

const props = defineProps({
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
    v-model="filterFormData.LOCATION"
    lable="location"
  />
  <MainInput type="text" v-model="filterFormData.CITY" lable="city" />
  <MainInput type="text" v-model="filterFormData.ZONE" lable="zone" />
  <MainInput type="text" v-model="filterFormData.LONGITUDE" lable="longitude" />
  <MainInput type="text" v-model="filterFormData.LATITUDE" lable="latitude" />
  <CheckBox
    lable="is active"
    class="flex-auto"
    v-model="filterFormData.IS_ACTIVE"
  />
</template>
