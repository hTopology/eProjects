<script setup lang="ts">
import CreateBtn from "./CreateBtn.vue";
import HeaderFilter from "./HeaderFilter.vue";
import FilterBtn from "./FilterBtn.vue";
import { inject } from "vue";

const { onOpenForm }: any = inject("pageHeader");
</script>
<template>
  <div class="flex items-center gap-4">
    <CreateBtn @click="onOpenForm('create')" />
    <HeaderFilter />
    <FilterBtn />
  </div>
</template>
