<script setup lang="ts">
import MainBtn from "./MainBtn.vue";
import CloseIcon from "./icons/CloseIcon.vue";
import FilterIcon from "./icons/FilterIcon.vue";
const { filterFormData, onRead } = defineProps({
  filterFormData: {
    type: Object,
    required: true,
  },
  filterForm: {
    type: Object,
    required: true,
  },
  onRead: {
    type: Function,
    required: true,
  },
  toggleFilterForm: Function,
  onFilter: Function,
});
</script>
<template>
  <aside
    class="absolute md:block top-0 right-0 z-40 h-full transition-all bg-primary w-60 px-4 py-6"
  >
    <div class="flex flex-col h-full">
      <div class="flex items-center justify-between mb-6">
        <h4 class="font-bold text-white">Advanced Filter</h4>
        <button class="p-2" @click="toggleFilterForm && toggleFilterForm()">
          <CloseIcon class="fill-white" />
        </button>
      </div>
      <div class="h-full overflow-y-auto">
        <form>
          <component :is="filterForm" :filterFormData="filterFormData" />
        </form>
      </div>
      <div class="flex justify-between">
        <MainBtn
          @click="onFilter && onFilter()"
          btnText="apply"
          class="text-primary bg-white border-white"
          :icon="FilterIcon"
        />
        <MainBtn
          @click="toggleFilterForm && toggleFilterForm()"
          btnText="colse"
          class="text-white border-transparent"
        />
      </div>
    </div>
  </aside>
</template>
