<script setup lang="ts">
import Title from "@/views/components/public/Title.vue";
import NotificationBox from "@/views/components/public/NotificationBox.vue";
</script>
<template>
  <Title title="dashboard" />
  <div class="flex flex-wrap gap-6 mt-5">
    <NotificationBox />
    <NotificationBox />
    <NotificationBox />
  </div>
</template>
