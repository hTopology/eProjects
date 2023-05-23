<script setup lang="ts">
import Dropdown from "@/views/components/Dropdown.vue";
</script>
<template>
  <div class="border-x border-x-third px-4">
    <div class="flex relative border border-third rounded-3xl">
      <div class="relative w-full">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input
          type="text"
          id="simple-search"
          class="text-gray-900 text-sm block w-full pl-10 p-2.5 outline-none bg-transparent"
          placeholder="Search"
          required
        />
      </div>
      <Dropdown />
    </div>
  </div>
</template>
