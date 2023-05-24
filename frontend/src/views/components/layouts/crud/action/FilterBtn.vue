<script setup lang="ts">
import FilterMenu from "@/views/components/FilterMenu.vue";
import FilterIcon from "@/views/components/icons/FilterIcon.vue";
import { ref } from "vue";
const showMenu = ref(true);
</script>
<template>
  <button
    class="flex items-center gap-1 text-primary font-medium capitalize"
    @click="showMenu = false"
  >
    <FilterIcon />
    <span>filter</span>
  </button>
  <FilterMenu v-model="showMenu" />
</template>
