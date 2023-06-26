<script setup lang="ts">
import LangIcon from "@/views/components/icons/LangIcon.vue";
import { useI18n } from "vue-i18n";
import Sppiner from "../../public/Sppiner.vue";
import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { onMounted } from "vue";
const { locale } = useI18n();
const showSppiner = ref(false);

onMounted(() => {
  changeDirection(localStorage.getItem("lang") || "en");
});
useStorage("lang", locale);
function changeDirection(value: string) {
  const html = document.querySelector("html");
  if (html) {
    html.lang = value;
  }
}
function changeLang() {
  locale.value = locale.value == "ar" ? "en" : "ar";
  changeDirection(locale.value);
  showSppiner.value = true;
  setTimeout(() => {
    showSppiner.value = false;
  }, 300);
}
</script>
<template>
  <button
    @click="changeLang"
    class="hidden md:flex gap-1 items-center text-primary border-2 border-primary rounded-3xl px-3"
  >
    <LangIcon />
    <span class="uppercase">{{ locale }}</span>
  </button>
  <div class="fixed w-full h-full left-0 top-0 bg-white" v-if="showSppiner">
    <Sppiner />
  </div>
</template>
