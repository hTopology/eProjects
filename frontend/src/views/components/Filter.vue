<script setup lang="ts">
import CurdCurrentLayout from "@/views/layouts/CurdCurrentLayout.vue";
const { filterFormData, onRead } = defineProps({
  filterFormData: {
    type: Object,
    required: true,
  },
  filterForm: {
    type: Object,
  },
  onRead: {
    type: Function,
    required: true,
  },
  onFilter: Function,
  toggleFilterForm: Function,
});
// function filter() {
//   curPage.value = filterFormData.CurPage;
//   filterFormData.CurPage = 1;
//   onRead(filterFormData);
// }
</script>
<template>
  <CurdCurrentLayout
    confirmBtn="apply"
    cancleBtn="close"
    :onSave="onFilter"
    :showSaveBtn="true"
    v-if="filterForm"
    :onClose="toggleFilterForm"
  >
    <template #formContent
      ><component :is="filterForm" :filterFormData="filterFormData"
    /></template>
  </CurdCurrentLayout>
</template>
