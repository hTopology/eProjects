<script setup lang="ts">
import MainTable from "@/views/components/crud/MainTable.vue";
import NoData from "@/views/components/crud/NoData.vue";
import Pagination from "@/views/components/crud/Pagination.vue";
import Filter from "@/views/components/crud/filter/Filter.vue";
import FilterMenu from "@/views/components/crud/filter/FilterMenu.vue";
import { inject } from "vue";
import Sppiner from "@/views/components/public/Sppiner.vue";
import { computed } from "vue";

const {
  filterFormData,
  tableContent,
  onRead,
  onDelete,
  filterForm,
  onOpenForm,
  isLoading,
  filterFormType,
  curPage,
  toggleFilterForm,
}: any = inject("pageContent");

const dynamicFilterComponent = computed(() =>
  filterFormType.value == "menu" ? FilterMenu : Filter
);

const pageSize = +import.meta.env.VITE_PAGE_SIZE;
function onFilter() {
  curPage.value = filterFormData.CurPage;
  filterFormData.CurPage = 1;
  onRead(filterFormData);
}
</script>

<template>
  <div class="px-10 dark:bg-gray-600">
    <component
      v-if="filterForm"
      :is="dynamicFilterComponent"
      :onRead="onRead"
      :filterForm="filterForm"
      :toggleFilterForm="toggleFilterForm"
      :filterFormData="filterFormData"
      :onFilter="onFilter"
    />
    <div :class="{ hidden: isLoading }">
      <div v-if="tableContent.tData?.length">
        <MainTable
          :tableContent="tableContent"
          :onOpenForm="onOpenForm"
          :onDelete="onDelete"
        />
        <Pagination
          v-if="tableContent.tData?.[0].RowsCount > pageSize"
          :rowsCount="tableContent.tData?.[0].RowsCount"
          :onPageChanged="onRead"
          :filterFormData="filterFormData"
        />
      </div>
      <NoData v-else />
    </div>
    <Sppiner v-if="isLoading" />
  </div>
</template>
