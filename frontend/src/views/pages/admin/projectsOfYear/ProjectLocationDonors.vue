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
const donors = ref();
const locations = ref();
onMounted(async () => {
  locations.value = await getDropdownData("projects_locations");
  donors.value = await getDropdownData("projects_donors");
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
  <MainSelect defaultOption="donors" v-model="formData.DONOR_ID">
    <option v-for="row in donors" :value="row.DONOR_ID">
      {{ row.DONOR }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
