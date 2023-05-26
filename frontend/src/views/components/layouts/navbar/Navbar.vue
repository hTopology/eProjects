<script setup lang="ts">
import BarIcon from "../../icons/BarIcon.vue";
import NavbarAction from "./NavbarAction.vue";
</script>
<template>
  <nav class="px-4 md:px-10 py-3 w-full bg-white border-b border-gray-200 z-50">
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-4">
        <BarIcon
          class="fill-primary w-5 h-5 cursor-pointer"
          @click="$emit('toggleMenu')"
        />
        <RouterLink to="/" class="flex">
          <img src="/image/lgLogo.svg" alt="logo image" />
        </RouterLink>
      </div>
      <NavbarAction />
    </div>
  </nav>
</template>
