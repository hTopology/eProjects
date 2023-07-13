<script setup lang="ts">
import { post } from "@/services/crud.service";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { readData } from "@/middleware/script";
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
  donors.value = await readData("donors");
});
</script>

<template>
  <MainSelect defaultOption="donors" v-model="formData.DONOR_ID">
    <option v-for="row in donors" :value="row.DONOR_ID">
      {{ row.DONOR }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
