<script setup lang="ts">
import CurdCurrentLayout from "@/views/layouts/CurdCurrentLayout.vue";
import { inject } from "vue";
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
});
const { curPage }: any = inject("pageContent");
function filter() {
  curPage.value = filterFormData.CurPage;
  filterFormData.CurPage = 1;
  onRead(filterFormData);
}
</script>
<template>
  <CurdCurrentLayout
    confirmBtn="filter"
    :isShowCancle="false"
    :onSave="filter"
    :showSaveBtn="true"
    v-if="filterForm"
  >
    <template #formContent
      ><component :is="filterForm" :filterFormData="filterFormData"
    /></template>
  </CurdCurrentLayout>
</template>
