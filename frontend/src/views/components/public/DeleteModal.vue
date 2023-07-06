<script setup lang="ts">
import CheckIcon from "@/views/components/icons/CheckIcon.vue";
import CloseIcon from "@/views/components/icons/CloseIcon.vue";
defineProps({
  confirm: Function,
});
</script>
<template>
  <div
    @click="$emit('closeDelteModal')"
    class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full" @click.stop>
      <div
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 text-center"
      >
        <button
          @click="$emit('closeDelteModal')"
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        >
          <CloseIcon class="fill-primary w-4 h-4" />
        </button>
        <div class="p-6">
          <div
            class="w-14 h-14 m-auto flex items-center justify-center rounded-full border-2 border-gray-300 mb-4"
          >
            <i class="fa-solid fa-exclamation text-4xl text-gray-300"></i>
          </div>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this ?
          </h3>
          <button
            @click="$emit('confirmDelte')"
            type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          >
            <CheckIcon class="fill-white w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
