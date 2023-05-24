<script setup lang="ts">
import BarIcon from "../../icons/BarIcon.vue";
import NavbarAction from "./NavbarAction.vue";
</script>
<template>
  <nav
    class="px-4 md:px-10 py-3 fixed top-0 z-50 w-full bg-white border-b border-gray-200"
  >
    <div class="flex items-center justify-between flex-wrap">
      <div class="flex items-center gap-4">
        <BarIcon class="fill-primary w-5 h-5 cursor-pointer md:hidden" />
        <RouterLink to="/" class="flex">
          <img src="/image/lgLogo.svg" alt="logo image" />
        </RouterLink>
      </div>
      <NavbarAction />
    </div>
  </nav>
</template>
