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
const data = ref();
onMounted(() => {
  getData();
});
async function getData() {
  data.value = await post(`read/customers`, {
    CurPage: 1,
    PageSize: 20,
  });
  console.log(data.value);
}
</script>

<template>
  <MainSelect v-model="formData.CUSTOMER_ID" v-if="data">
    <option v-for="row in data" :value="row.CUSTOMER_ID">
      {{ row.CUSTOMER }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
