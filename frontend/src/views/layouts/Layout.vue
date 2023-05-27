<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/views/components/layouts/navbar/Navbar.vue";
import Sidebar from "@/views/components/layouts/sidebar/Sidebar.vue";
import LayoutContent from "@/views/components/layouts/LayoutContent.vue";

const showMenu = ref(true);
function displayMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <div class="flex flex-col">
    <Navbar :displayMenu="displayMenu" @toggleMenu="displayMenu" />
    <div class="flex relative" style="height: calc(100vh - 67px)">
      <Sidebar :showMenu="showMenu" />
      <LayoutContent
        :showMenu="showMenu"
        class="flex-auto overflow-y-scroll h-full"
      />
    </div>
  </div>
</template>
