<script setup lang="ts">
import { readData } from "@/middleware/script";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";
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
const items = ref();
const groups = ref();
const locations = ref();
onMounted(async () => {
  locations.value = await getDropdownData("projects_locations");
  groups.value = await getDropdownData("groups");
  if (props.formData.GROUP_ID) getItems();
});
async function getItems() {
  items.value = await getDropdownData("projects_items", {
    GROUP_ID: props.formData.GROUP_ID,
  });
}
function getDropdownData(entityId: string, body: Object = {}) {
  return readData(entityId, {
    FISCAL_YEAR_ID: props.extendedFormData?.FISCAL_YEAR_ID,
    PROJECT_ID: props.extendedFormData?.PROJECT_ID,
    IS_ACTIVE: 1,
    ...body,
  });
}
</script>

<template>
  <MainSelect defaultOption="location" v-model="formData.LOCATION_ID">
    <option v-for="row in locations" :value="row.LOCATION_ID">
      {{ row.LOCATION }}
    </option>
  </MainSelect>
  <MainSelect
    @change="getItems"
    defaultOption="group"
    v-model="formData.GROUP_ID"
  >
    <option v-for="row in groups" :value="row.GROUP_ID">
      {{ row.GROUP_DESC }}
    </option>
  </MainSelect>
  <MainSelect defaultOption="item" v-model="formData.ITEM_ID">
    <option v-for="row in items" :value="row.ITEM_ID">
      {{ row.ITEM }}
    </option>
  </MainSelect>
  <MainInput type="text" v-model="formData.QTY" lable="quantity" />
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
