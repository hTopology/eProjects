<script setup lang="ts">
import PageHeader from "@/views/components/crud/PageHeader.vue";
import PageContent from "@/views/components/crud/PageContent.vue";
import Action from "@/views/components/crud/action/Action.vue";
import { inject } from "vue";
defineProps({
  isFullPage: Boolean,
});

const { title }: any = inject("pageTitle");
</script>
<template>
  <PageHeader :title="title" v-if="!isFullPage">
    <Action />
  </PageHeader>
  <slot name="tabs"></slot>
  <PageContent v-if="!isFullPage" />
  <div class="px-10 mt-4" :class="{ 'py-4': isFullPage }">
    <slot></slot>
  </div>
</template>
