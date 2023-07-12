<script setup lang="ts">
import { post } from "@/services/crud.service";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";
defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  isEmpty: Boolean,
  v$: { type: Object, required: true },
});

const modelValue = defineModel();
modelValue.value = {};
const donors = ref();
onMounted(async () => {
  donors.value = await getDropdownData();
});
function getDropdownData() {
  return post(`read/donors`, { IS_ACTIVE: 1 });
}
</script>

<template>
  <MainSelect v-model="formData.DONOR_ID" v-if="donors">
    <option v-for="row in donors" :value="row.DONOR_ID">
      {{ row.DONOR }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
