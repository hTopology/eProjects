<script setup lang="ts">
import LangIcon from "@/views/components/icons/LangIcon.vue";
</script>
<template>
  <div
    for="lang"
    class="hidden md:flex gap-1 items-center text-primary border-2 border-primary rounded-3xl px-3"
  >
    <LangIcon />
    <span class="uppercase">en</span>
  </div>
</template>
