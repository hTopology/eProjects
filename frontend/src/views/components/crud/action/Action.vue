<script setup lang="ts">
import CreateBtn from "./CreateBtn.vue";
import HeaderFilter from "./HeaderFilter.vue";
import FilterBtn from "./FilterBtn.vue";
import { inject } from "vue";
import ClearFilter from "@/views/components/icons/ClearFilter.vue";
import MainBtn from "@/views/components/inputs/MainBtn.vue";

const { onOpenForm, clearFilter, filterFormData }: any = inject("pageHeader");
</script>
<template>
  <div class="flex items-center gap-4">
    <CreateBtn @click="onOpenForm('create')" />
    <MainBtn
      @click="clearFilter && clearFilter()"
      btnText="clear filter"
      class="text-primary border-transparent"
      :icon="ClearFilter"
      v-if="Object.keys(filterFormData).length > 2"
    />

    <HeaderFilter />
    <FilterBtn />
  </div>
</template>
