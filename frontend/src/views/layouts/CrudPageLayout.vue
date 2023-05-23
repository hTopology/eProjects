<script setup lang="ts">
import { computed, onMounted, provide, ref, shallowRef } from "vue";
import ICrudPageLayout from "../layouts/ICrudPageLayout.vue";
import CrudDialogLayout from "@/views/layouts/CrudDialogLayout.vue";
import CurdCurrentLayout from "@/views/layouts/CurdCurrentLayout.vue";
import { post, put, remove } from "@/services/crud.service";

const props = defineProps({
  title: String,
  entityId: {
    type: String,
    required: true,
  },
  tHeaders: {
    type: Object,
    required: true,
  },
  tColumns: {
    type: Object,
    required: true,
  },
  extendedData: {
    type: Object,
  },
  formPageType: String,
  pKey: {
    type: Object,
    required: true,
  },
  form: {
    type: Object,
    required: true,
  },
  filterForm: {
    type: Object,
  },
});
const formData = ref({}) as any;
const data = ref();
const tHeaders = props.tHeaders;
const tColumns = props.tColumns;
const dynamicComponent = shallowRef();
const isLoading = ref(false);
const curPage = ref(1);
const isFullPage = ref(false);
const filterForm = ref();
const filterFormData: any = ref({
  CurPage: +import.meta.env.VITE_CUR_PAGE,
  PageSize: +import.meta.env.VITE_PAGE_SIZE,
});
const isCreateMode = computed(() => pageMode.value === "create");
let tableContent = computed(() =>
  Object.assign({ tHeaders }, { tColumns }, { tData: data.value })
);
let pageMode = ref("create");
onMounted(() => {
  // onRead();
  data.value = [
    { UNIT_ID: 1, UNIT_AR: "1", UNIT_EN: "1", RowsCount: 3 },
    { UNIT_ID: 1, UNIT_AR: "1", UNIT_EN: "1", RowsCount: 3 },
    { UNIT_ID: 1, UNIT_AR: "1", UNIT_EN: "1", RowsCount: 3 },
  ];
});

function onOpenForm(mode: string, index: number = -1) {
  pageMode.value = mode;
  setFormData(index);
  if (props.formPageType == "newPage") {
    isFullPage.value = true;
    dynamicComponent.value = CurdCurrentLayout;
  } else if (props.formPageType == "current") {
    dynamicComponent.value = CurdCurrentLayout;
  } else if (props.formPageType == "dialog") {
    dynamicComponent.value = CrudDialogLayout;
  }
}

function setFormData(index: number) {
  isCreateMode.value
    ? (formData.value = {})
    : Object.assign(
        formData.value,
        data.value[index],
        { oPKey: getPKeys(index) },
        props.extendedData
      );
}

async function onSave() {
  isCreateMode.value ? await onCreate() : await onUpdate();
  restVariablesToDefaultValue();
}
async function onCreate() {
  const pKey = await post(`create/${props.entityId}`, formData.value);
  Object.assign(filterFormData.value, { [props.pKey[0]]: pKey.ID });
  console.log(filterFormData.value);
  curPage.value = filterFormData.value.CurPage;
  filterFormData.value.CurPage = 1;
  await onRead();
}
async function onRead() {
  data.value = await post(`read/${props.entityId}`, filterFormData.value);
}
async function onUpdate() {
  await put(`update/${props.entityId}`, formData.value);
  filterFormData.value.CurPage = curPage.value;
  onRead();
}
async function onDelete(index: number) {
  await remove(`delete/${props.entityId}`, getPKeys(index));
  data.value.splice(index, 1);
  if (!data.value.length) {
    if (filterFormData.value.CurPage > 1) {
      filterFormData.value.CurPage--;
    } else {
      filterFormData.value.CurPage = 1;
    }
    onRead();
    //we can calc cur page without onRead
  }
}
function getPKeys(index: number) {
  const pKey: any = {};
  props.pKey.forEach((el: string) => (pKey[el] = data.value[index][el]));
  return pKey;
}
function restVariablesToDefaultValue() {
  formData.value = {};
  pageMode.value = "create";
  isFullPage.value = false;
  onClose();
}
function onClose() {
  dynamicComponent.value = null;
}

function openFilterForm() {
  filterForm.value = filterForm.value ? null : props.filterForm;
}
function clearFilter() {
  restFilterFormData();
  filterFormData.value.CurPage = curPage.value;
  filterForm.value = null;
  onRead();
}
function restFilterFormData() {
  filterFormData.value = {
    CurPage: +import.meta.env.VITE_CUR_PAGE,
    PageSize: +import.meta.env.VITE_PAGE_SIZE,
  };
}
provide("pageHeader", {
  onOpenForm,
  openFilterForm,
  tableContent,
  onRead,
  filterFormData,
  restFilterFormData,
  clearFilter,
});
provide("pageContent", {
  filterFormData,
  tableContent,
  onRead,
  onDelete,
  filterForm,
  clearFilter,
  onOpenForm,
  isLoading,
  curPage,
});
</script>

<template>
  <div>
    <ICrudPageLayout :class="{ hidden: isFullPage }">
      <template #pageTitle v-if="title">{{ props.entityId }}</template>
    </ICrudPageLayout>

    <component
      :onSave="onSave"
      :title="pageMode + ' ' + props.entityId"
      :is="dynamicComponent"
      :onClose="restVariablesToDefaultValue"
    >
      <template #formContent
        ><component :is="form" :formData="formData"
      /></template>
    </component>
  </div>
</template>
