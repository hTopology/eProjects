<script setup lang="ts">
import CreateBtn from "./CreateBtn.vue";
import FilterHeader from "../filter/FilterHeader.vue";
import FilterBtn from "./FilterBtn.vue";
import { inject } from "vue";
import ClearFilter from "@/views/components/icons/ClearFilter.vue";
import MainBtn from "@/views/components/inputs/MainBtn.vue";
import { computed } from "vue";

const { onOpenForm, clearFilter, filterFormData, filterForm }: any =
  inject("pageHeader");

const isShowFilter = computed(() => {
  let count = 0;
  Object.keys(filterFormData.value).forEach((el) => {
    if (filterFormData.value[el]) {
      count++;
    }
  });
  return count > 2;
});
const baseSearchOptions: any = inject("baseSearch");
</script>
<template>
  <div class="flex items-center gap-4">
    <CreateBtn @click="onOpenForm('create')" />

    <MainBtn
      @click="clearFilter && clearFilter()"
      btnText="clear filter"
      class="text-primary border-transparent"
      :icon="ClearFilter"
      v-if="isShowFilter"
    />
    <FilterHeader v-if="baseSearchOptions" />
    <FilterBtn v-if="filterForm" />
  </div>
</template>
