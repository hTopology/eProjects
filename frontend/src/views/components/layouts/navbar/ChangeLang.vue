<script setup lang="ts">
import LangIcon from "@/views/components/icons/LangIcon.vue";
// import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
changeDirection();
function changeDirection() {
  const html = document.querySelector("html");
  if (html) {
    html.lang = locale.value;
  }
}
function changeLang() {
  locale.value == "ar" ? (locale.value = "en") : (locale.value = "ar");
  changeDirection();
}
</script>
<template>
  <div
    @click="changeLang"
    class="hidden md:flex gap-1 items-center text-primary border-2 border-primary rounded-3xl px-3"
  >
    <LangIcon />
    <span class="uppercase">{{ locale }}</span>
  </div>
</template>
