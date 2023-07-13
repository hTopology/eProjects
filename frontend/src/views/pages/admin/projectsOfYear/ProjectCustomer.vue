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
const data = ref();
onMounted(async () => {
  data.value = await readData("customers");
});
</script>

<template>
  <MainSelect defaultOption="vendor" v-model="formData.CUSTOMER_ID">
    <option v-for="row in data" :value="row.CUSTOMER_ID">
      {{ row.CUSTOMER }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
