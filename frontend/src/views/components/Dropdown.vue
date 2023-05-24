<script setup lang="ts">
import ArrowDownIcon from "./icons/ArrowDownIcon.vue";
</script>
<template>
  <button
    class="myBtn m-0 flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 outline-none"
    type="button"
  >
    All categories

    <ArrowDownIcon />
  </button>
  <div
    class="myDrop z-10 hidden bg-white rounded-lg shadow absolute right-0 top-11 w-44"
  >
    <ul class="py-2 text-sm text-gray-700">
      <li
        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 cursor-pointer select-none"
      >
        Mockups
      </li>
      <li
        class="inline-flex w-full px-4 py-2 hover:bg-gray-100 cursor-pointer select-none"
      >
        Mockups
      </li>
    </ul>
  </div>
</template>
<style scoped>
.myBtn:focus + .myDrop {
  display: block !important;
}
</style>
