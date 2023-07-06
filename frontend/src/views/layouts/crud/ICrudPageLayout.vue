<script setup lang="ts">
import PageHeader from "@/views/components/crud/PageHeader.vue";
import PageContent from "@/views/components/crud/PageContent.vue";
defineProps({
  isFullPage: Boolean,
});
</script>
<template>
  <PageHeader v-if="!isFullPage" />
  <div class="px-10" :class="{ 'py-4': isFullPage }">
    <slot></slot>
  </div>
  <PageContent v-if="!isFullPage" />
</template>
