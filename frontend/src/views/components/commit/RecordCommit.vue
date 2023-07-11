<script setup lang="ts">
import MainButton from "../inputs/MainButton.vue";
import MicIcon from "@/views/components/icons/MicIcon.vue";
</script>
<template>
  <div class="flex gap-6 mt-4 items-start">
    <textarea
      class="flex-1 bg-transparent border border-dashed border-primary outline-none px-4 rounded-lg"
      placeholder="Type your message here..."
    ></textarea>
    <MainButton :icon="MicIcon" class="bg-primary" />
  </div>
</template>
