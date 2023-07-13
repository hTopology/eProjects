<script setup lang="ts">
import { readData } from "@/middleware/script";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  extendedFormData: {
    type: Object,
    requried: true,
  },
  v$: { type: Object, required: true },
});

const modelValue = defineModel();
modelValue.value = {};
const locations = ref();
const members = ref();
onMounted(async () => {
  locations.value = await getDropdownData("projects_locations");
  members.value = await getDropdownData("projects_members");
});
function getDropdownData(entityId: string) {
  return readData(entityId, {
    FISCAL_YEAR_ID: props.extendedFormData?.FISCAL_YEAR_ID,
    PROJECT_ID: props.extendedFormData?.PROJECT_ID,
    IS_ACTIVE: 1,
  });
}
</script>

<template>
  <MainSelect defaultOption="location" v-model="formData.LOCATION_ID">
    <option v-for="row in locations" :value="row.LOCATION_ID">
      {{ row.LOCATION }}
    </option>
  </MainSelect>
  <MainSelect defaultOption="member" v-model="formData.MEMBER_ID">
    <option v-for="row in members" :value="row.MEMBER_ID">
      {{ row.MEMBER }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
