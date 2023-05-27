<script setup lang="ts">
defineProps({
  icon: {
    type: Object,
  },
  btnText: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <button
    class="text-xs md:text-sm px-6 py-2 font-bold outline-none rounded-3xl capitalize flex items-center gap-1 border-2 text-center"
  >
    {{ btnText }}
    <div class="" v-if="icon">
      <component :is="icon" class="fill-primary w-5 h-5" />
    </div>
  </button>
</template>
