<script setup lang="ts">
import Title from "@/views/components/public/Title.vue";
import { inject } from "vue";
defineProps({
  title: String,
});
</script>
<template>
  <div class="flex justify-between mb-6 py-4 px-10 border-b border-third">
    <Title v-if="title" :title="title" />
    <slot></slot>
  </div>
</template>
