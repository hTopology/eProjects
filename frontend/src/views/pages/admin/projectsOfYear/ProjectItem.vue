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
  isEmpty: Boolean,
  v$: { type: Object, required: true },
});

const modelValue = defineModel();
modelValue.value = {};
const groups = ref();
const items = ref();
onMounted(async () => {
  groups.value = await getDropdownData("groups");
  getItems();
});
async function getItems() {
  if (props.formData.GROUP_ID)
    items.value = await getDropdownData("items", {
      GROUP_ID: props.formData.GROUP_ID,
    });
}
function getDropdownData(entityId: string, body: Object = {}) {
  return post(`read/${entityId}`, {
    CurPage: 1,
    PageSize: 20,
    IS_ACTIVE: 1,
    ...body,
  });
}
</script>

<template>
  <MainSelect @change="getItems" v-model="formData.GROUP_ID">
    <option v-for="row in groups" :value="row.GROUP_ID">
      {{ row.GROUP_DESC }}
    </option>
  </MainSelect>
  <MainSelect v-model="formData.ITEM_ID">
    <option v-for="row in items" :value="row.ITEM_ID">
      {{ row.ITEM }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
