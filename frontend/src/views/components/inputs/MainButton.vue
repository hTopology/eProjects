<script setup lang="ts">
import PlusIcon from "@/views/components/icons/PlusIcon.vue";
defineProps({
  icon: Object,
  lable: String,
});
</script>
<template>
  <button
    class="outline-none border flex gap-2 items-center font-bold capitalize px-4 py-2 rounded-lg"
  >
    <component v-if="icon" :is="icon" />
    <span v-if="lable">{{ lable }} </span>
  </button>
</template>
