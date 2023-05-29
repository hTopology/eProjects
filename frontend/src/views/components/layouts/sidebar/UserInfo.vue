<script setup lang="ts">
import ArrowDownIcon from "@/views/components/icons/ArrowDownIcon.vue";
import { inject } from "vue";

defineProps({
  showMenu: Boolean,
});

const toggleShowSidebar: any = inject("toggleShowSidebar");
</script>
<template>
  <div
    class="flex justify-between items-center p-5 relative"
    style="background-color: #09244b08"
  >
    <div class="flex items-center gap-2">
      <div class="w-10 h-10 rounded-full overflow-hidden">
        <img src="/image/user.png" alt="" />
      </div>
      <div class="" v-if="showMenu">
        <h4 class="capitalize text-title text-sm font-bold">Richard</h4>
        <p class="text-grayText text-xs">9394lay@gmail.com</p>
      </div>
    </div>
    <button
      @click="toggleShowSidebar()"
      class="bg-primary rounded-full w-5 h-5 flex items-center justify-center"
      :class="{ 'absolute top-1/2 -translate-y-1/2 -right-2 z-50': !showMenu }"
    >
      <ArrowDownIcon class="fill-white rotate-90" />
    </button>
  </div>
</template>
