<script setup lang="ts">
import Title from "@/views/components/public/Title.vue";
import NotificationBox from "@/views/components/public/NotificationBox.vue";
</script>
<template>
  <div class="px-10">
    <Title title="dashboard" class="py-4" />
    <div class="flex flex-wrap gap-6 mt-5">
      <NotificationBox />
      <NotificationBox />
      <NotificationBox />
    </div>
  </div>
</template>
