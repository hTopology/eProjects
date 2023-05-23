<script setup lang="ts">
import { ref } from "vue";
import Navbar from "@/views/components/layouts/navbar/Navbar.vue";
import Sidebar from "@/views/components/layouts/sidebar/Sidebar.vue";
import LayoutContent from "@/views/components/layouts/LayoutContent.vue";

const showMenu = ref(false);
function displayMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <Navbar :displayMenu="displayMenu" />
  <Sidebar :showMenu="showMenu" />
  <LayoutContent :showMenu="showMenu" />
</template>
