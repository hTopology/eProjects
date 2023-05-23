<script setup lang="ts">
import Title from "../components/Title.vue";
import NotificationBox from "../components/NotificationBox.vue";
</script>
<template>
  <Title title="dashboard" />
  <div class="flex flex-wrap gap-6 mt-5">
    <NotificationBox />
    <NotificationBox />
    <NotificationBox />
  </div>
</template>
