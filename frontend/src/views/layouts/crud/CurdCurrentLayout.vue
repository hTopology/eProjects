<script setup lang="ts">
const props = defineProps({
  onSave: {
    type: Function,
  },
  onClose: {
    type: Function,
  },
  showSaveBtn: {
    type: Boolean,
    default: true,
  },
  confirmBtn: String,
  cancleBtn: String,
  isShowCancle: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <div class="relative">
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
      <div class="p-6 space-y-6">
        <slot name="formContent"></slot>
      </div>
      <div
        class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
      >
        <button
          @click="onSave && onSave()"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ confirmBtn || "save" }}
        </button>
        <button
          @click="onClose && onClose()"
          type="button"
          v-if="isShowCancle"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {{ cancleBtn || "cancle" }}
        </button>
      </div>
    </div>
  </div>
</template>
