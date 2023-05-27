<script setup lang="ts">
import CloseIcon from "./icons/CloseIcon.vue";
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
  clearFilter: Function,
});
</script>
<template>
  <aside
    class="fixed md:block top-16 right-0 z-40 h-screen transition-all bg-primary w-60 px-4 py-6"
  >
    <div class="flex flex-col justify-between py-8 h-full">
      <div class="pb-4 overflow-y-auto bg-primary">
        <div class="flex items-center justify-between mb-6">
          <h4 class="font-bold text-white">Advanced Filter</h4>
          <button class="p-2" @click="clearFilter && clearFilter()">
            <CloseIcon class="fill-white" />
          </button>
        </div>
        <form>
          <component :is="filterForm" :filterFormData="filterFormData" />
        </form>
      </div>
      <div class="">
        <button
          class="text-xs md:text-sm p-1 font-bold outline-none rounded-3xl capitalize flex items-center gap-2 border-2 border-primary"
        >
          filter
        </button>
      </div>
    </div>
  </aside>
</template>
