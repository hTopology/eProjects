<script setup lang="ts">
import { inject, ref } from "vue";
import Avatar from "./Avatar.vue";
import ChangeLang from "./ChangeLang.vue";
let darkMode = ref(false);

function changeMode() {
  const html = document.querySelector("html");
  darkMode.value = !darkMode.value;
  darkMode.value ? html?.classList.remove("dark") : html?.classList.add("dark");
}
const toggleShowSidebar: any = inject("toggleShowSidebar");
</script>
<template>
  <div class="flex gap-3">
    <img src="/image/light.svg" alt="" @click="toggleShowSidebar" />
    <ChangeLang />
    <Avatar />
  </div>
</template>
