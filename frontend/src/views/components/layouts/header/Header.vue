<script setup lang="ts">
import HeaderAction from "./HeaderAction.vue";
</script>
<template>
  <nav
    class="px-4 md:px-10 py-3 sticky top-0 z-50 w-full bg-white border-b border-gray-200"
  >
    <div class="flex items-center justify-between">
      <RouterLink to="/" class="flex">
        <img src="/image/lgLogo.svg" alt="logo image" />
      </RouterLink>
      <HeaderAction />
    </div>
  </nav>
</template>
