<script setup lang="ts">
import { computed, onMounted, provide, ref, shallowRef, onUpdated } from "vue";
import ICrudPageLayout from "@/views/layouts/crud/ICrudPageLayout.vue";
import CrudDialogLayout from "@/views/layouts/crud/CrudDialogLayout.vue";
import CurdCurrentLayout from "@/views/layouts/crud/CurdCurrentLayout.vue";
import { post, put, remove } from "@/services/crud.service";
import { useVuelidate } from "@vuelidate/core";
import { watch } from "vue";

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
  extendedFormData: {
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
  filterFormType: String,
  filterData: Object,
  baseSearch: Object,
  openForm: Function,
});
const formData = ref({}) as any,
  data = ref(),
  dynamicComponent = shallowRef(),
  isLoading = ref(false),
  curPage = ref(1),
  isFullPage = ref(false),
  filterForm = ref(),
  rules = ref({}),
  filterFormData: any = ref({
    CurPage: +import.meta.env.VITE_CUR_PAGE,
    PageSize: +import.meta.env.VITE_PAGE_SIZE,
  }),
  filterFormType = computed(() => props.filterFormType),
  isCreateMode = computed(() => pageMode.value === "create"),
  v$ = useVuelidate(rules, formData);
let tableContent = computed(() =>
  Object.assign(
    { tHeaders: props.tHeaders },
    { tColumns: props.tColumns },
    { tData: data.value }
  )
);
let pageMode = ref("create");
onMounted(() => {
  onRead();
});
const entityId = computed(() => props.entityId);
watch(entityId, () => {
  onRead();
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
    ? Object.assign(formData.value, props.extendedFormData)
    : Object.assign(
        formData.value,
        data.value[index],
        { oPKey: getPKeys(data.value[index]) },
        props.extendedFormData
      );

  console.log(formData.value);
}

async function onSave() {
  v$.value.$validate();
  if (v$.value.$error) {
    return;
  }
  isCreateMode.value ? await onCreate() : await onUpdate();
  restVariablesToDefaultValue();
}
async function onCreate() {
  const pKey = await post(`create/${props.entityId}`, formData.value);
  if (pKey[0].PK == 0)
    Object.assign(filterFormData.value, getPKeys(formData.value));
  else Object.assign(filterFormData.value, { [props.pKey[0]]: pKey[0].PK });
  curPage.value = filterFormData.value.CurPage;
  filterFormData.value.CurPage = 1;
  await onRead();
}
async function onRead() {
  isLoading.value = true;
  data.value = await post(`read/${props.entityId}`, {
    ...filterFormData.value,
    ...props.filterData,
  });
  isLoading.value = false;
}
async function onUpdate() {
  await put(`update/${props.entityId}`, formData.value);
  filterFormData.value.CurPage = curPage.value;
  onRead();
}
async function onDelete(index: number) {
  await remove(`delete/${props.entityId}`, getPKeys(data.value[index]));
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
function getPKeys(data: any) {
  const pKey: any = {};
  props.pKey.forEach((el: string) => (pKey[el] = data[el]));
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

function toggleFilterForm() {
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
  toggleFilterForm,
  tableContent,
  onRead,
  filterFormData,
  restFilterFormData,
  clearFilter,
  filterForm: props.filterForm,
});
provide("pageTitle", {
  title: props.title,
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
  filterFormType,
  toggleFilterForm,
  openForm: props.openForm,
});
const baseSearch = computed(() => props.baseSearch);
provide("baseSearch", baseSearch);
</script>

<template>
  <ICrudPageLayout :isFullPage="isFullPage"
    ><template #tabs>
      <slot name="tabs"></slot>
    </template>
    <component
      :onSave="onSave"
      :title="pageMode + ' ' + props.entityId"
      :is="dynamicComponent"
      :onClose="restVariablesToDefaultValue"
    >
      <template #formContent>
        <component
          :is="form"
          :formData="formData"
          :extendedFormData="extendedFormData"
          v-model="rules"
          :v$="v$"
        />
      </template>
    </component>
  </ICrudPageLayout>
</template>
