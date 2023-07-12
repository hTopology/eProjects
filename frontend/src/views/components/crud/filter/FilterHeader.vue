<script setup lang="ts">
import Dropdown from "@/views/components/inputs/Dropdown.vue";
import SearchIcon from "@/views/components/icons/SearchIcon.vue";
import { watch } from "vue";
import { ref } from "vue";
import { inject } from "vue";
const { filterFormData, onRead, clearFilter }: any = inject("pageHeader");
const baseSearchOptions: any = inject("baseSearch");
const searchBy = ref(baseSearchOptions[0].value);
function oneInputFilter() {
  filterFormData.value.CurPage = 1;
  onRead();
}
watch(searchBy, () => {
  clearFilter();
});
</script>
<template>
  <div class="border-x border-x-third px-4">
    <div class="flex items-center relative border border-third rounded-3xl">
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <SearchIcon />
        </div>
        <input
          type="text"
          @input="oneInputFilter"
          v-model="filterFormData[searchBy]"
          class="text-gray-900 text-sm block w-full pl-10 p-2.5 outline-none bg-transparent"
          placeholder="Search"
        />
      </div>
      <Dropdown
        v-model="searchBy"
        v-if="baseSearchOptions"
        :options="baseSearchOptions"
      />
    </div>
  </div>
</template>
