<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  rowsCount: {
    type: Number,
    required: true
  },
  rowsPerPage: {
    type: Number,
    default: +import.meta.env.VITE_PAGE_SIZE
  },
  PerPages: {
    type: Number,
    default: +import.meta.env.VITE_PAGES_COUNT
  },
  onPageChanged: {
    type: Function,
    required: true
  },
  filterFormData: {
    type: Object,
    required: true
  }
});
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.rowsCount / props.rowsPerPage));
const originalArray = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));
const sheftCount = Math.ceil(totalPages.value / props.PerPages) - 1;
let sheft = ref(0);
const subarrays = computed(() => {
  let result = [];
  for (let i = 0; i < originalArray.value.length; i += props.PerPages) {
    result.push(originalArray.value.slice(i, i + props.PerPages));
  }
  return result;
});
const displayPages = computed(() => subarrays.value[sheft.value]);
const watchRowCount = computed(() => props.rowsCount);
watch(watchRowCount, (newValue, oldValue) => {
  props.filterFormData.CurPage = 1;
});

function prev() {
  sheft.value > 0 ? sheft.value-- : null;
  props.filterFormData.CurPage = Math.max(subarrays.value[sheft.value][0], 1);
  props.onPageChanged(props.filterFormData);
}
function next() {
  sheft.value < sheftCount ? sheft.value++ : null;
  props.filterFormData.CurPage = Math.min(subarrays.value[sheft.value][0], totalPages.value);
  props.onPageChanged(props.filterFormData);
}
function last() {
  sheft.value = sheftCount;
  props.filterFormData.CurPage = totalPages.value;
  props.onPageChanged(props.filterFormData);
}
function first() {
  sheft.value = 0;
  props.filterFormData.CurPage = 1;
  props.onPageChanged(props.filterFormData);
}
function changePage(pageNumber: number) {
  props.filterFormData.CurPage = pageNumber;
  props.onPageChanged(props.filterFormData);
}
</script>
<template>
  <ul class="flex justify-center items-center -space-x-px mt-5 select-none">
    <li>
      <span
        @click="first"
        :class="{ hidden: filterFormData.CurPage == 1 }"
        class="block cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <i class="fa-solid fa-angles-left"></i>
      </span>
    </li>
    <li>
      <span
        @click="prev"
        :class="{ hidden: sheft == 0 }"
        class="block cursor-pointer px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <i class="fa-solid fa-angle-left"></i>
      </span>
    </li>
    <li v-for="pageNumber in displayPages" :key="pageNumber">
      <span
        @click="changePage(pageNumber)"
        class="cursor-pointer px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
        :class="[
          { 'bg-blue-200': pageNumber === filterFormData.CurPage },
          { 'bg-white': pageNumber != filterFormData.CurPage }
        ]"
        >{{ pageNumber }}</span
      >
    </li>

    <li>
      <span
        @click="next"
        :class="{ hidden: sheft == sheftCount }"
        class="block cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        <i class="fa-solid fa-angle-right"></i>
      </span>
    </li>
    <li>
      <span
        @click="last"
        :class="{ hidden: filterFormData.CurPage == totalPages }"
        class="block cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
      >
        <i class="fa-solid fa-angles-right"></i>
      </span>
    </li>
  </ul>
</template>
