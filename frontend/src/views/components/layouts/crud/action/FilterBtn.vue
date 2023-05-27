<script setup lang="ts">
import FilterIcon from "@/views/components/icons/FilterIcon.vue";
import { inject } from "vue";

const { openFilterForm }: any = inject("pageHeader");
</script>
<template>
  <button
    class="flex items-center gap-1 text-primary font-medium capitalize"
    @click="openFilterForm()"
  >
    <FilterIcon />
    <span>filter</span>
  </button>

  <!-- <FilterMenu :filterForm="filterForm" v-model="showFilterMenu" /> -->
</template>
