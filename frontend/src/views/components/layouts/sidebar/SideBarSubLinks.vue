<script setup lang="ts">
import { ref } from "vue";
import ArrowDownIcon from "../../icons/ArrowDownIcon.vue";

defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  links: {
    type: Object,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  linkName: {
    type: String,
    required: true,
  },
});
const isLinksShow = ref(false);
</script>
<template>
  <li>
    <button
      @click="isLinksShow = !isLinksShow"
      class="btn w-full flex items-center gap-2 py-2 px-4 text-sidebarText text-sm font-bold capitalize rounded-lg"
    >
      <component :is="icon" class="fill-sidebarText" />
      <span v-if="showMenu">setting</span>
      <ArrowDownIcon class="fill-primary w-3 h-3 ml-auto" />
    </button>
    <ul :class="{ hidden: !isLinksShow }" class="p-3 bg-gray-100">
      <li v-for="link in links">
        <RouterLink
          :to="link.to"
          class="flex items-center gap-2 py-2 px-4 text-sidebarText text-sm font-bold capitalize rounded-lg"
        >
          <component :is="icon" class="fill-sidebarText" />
          <span v-if="showMenu">{{ link.linkName }}</span>
        </RouterLink>
      </li>
    </ul>
  </li>
</template>
<style scoped>
.router-link-active.router-link-exact-active {
  background-color: #006749;
  color: #fff;
}
.router-link-active.router-link-exact-active svg {
  fill: #fff;
}
</style>
