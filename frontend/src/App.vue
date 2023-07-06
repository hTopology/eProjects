<script setup lang="ts">
import { ref } from "vue";

const show = ref(false);
</script>
<template>
  <!-- <RouterView />
   -->
  <button @click="show = !show">open</button>
  <Transition name="fade">
    <p v-if="show">name</p>
  </Transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
