<script setup lang="ts">
import { post } from "@/services/crud.service";
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
  return post(`read/${entityId}`, {
    CurPage: 1,
    PageSize: 20,
    FISCAL_YEAR_ID: props.extendedFormData?.FISCAL_YEAR_ID,
    PROJECT_ID: props.extendedFormData?.PROJECT_ID,
    IS_ACTIVE: 1,
  });
}
</script>

<template>
  <MainSelect v-model="formData.LOCATION_ID" v-if="locations">
    <option v-for="row in locations" :value="row.LOCATION_ID">
      {{ row.LOCATION }}
    </option>
  </MainSelect>
  <MainSelect v-model="formData.DONOR">
    <option v-if="donors" v-for="row in donors" :value="row.DONOR">
      {{ row.DONONR }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
