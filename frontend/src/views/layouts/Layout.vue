<script setup lang="ts">
import { ref } from "vue";
import Header from "@/views/components/layouts/header/Header.vue";
import Menue from "@/views/components/layouts/menu/Menu.vue";
import LayoutContent from "@/views/components/layouts/LayoutContent.vue";

const showMenu = ref(false);
function displayMenu() {
  showMenu.value = !showMenu.value;
}
</script>

<template>
  <Header :displayMenu="displayMenu" />
  <Menue :showMenu="showMenu" />
  <LayoutContent :showMenu="showMenu" />
</template>
