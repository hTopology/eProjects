<script setup lang="ts">
import CloseIcon from "../components/icons/CloseIcon.vue";

defineProps({
  onSave: {
    type: Function,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  hasHeader: {
    type: Boolean,
    default: true,
  },
  hasFooter: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div
    class="fixed bg-black bg-opacity-50 flex items-center justify-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-2xl max-h-full">
      <form @submit.prevent="onSave()">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div
            v-if="hasHeader"
            class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
          >
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ title }}
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="onClose()"
            >
              <CloseIcon class="fill-primary w-4 h-4" />
            </button>
          </div>

          <div class="p-6 space-y-6">
            <slot name="formContent"></slot>
          </div>
          <div
            v-if="hasFooter"
            class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
