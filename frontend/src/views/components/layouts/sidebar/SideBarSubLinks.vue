<script setup lang="ts">
import { ref } from "vue";
import ArrowDownIcon from "../../icons/ArrowDownIcon.vue";
import SidebarLink from "./SidebarLink.vue";

defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
});
const isLinksShow = ref(false);
</script>
<template>
  <li>
    <button @click="isLinksShow = !isLinksShow"
      class="btn w-full flex items-center gap-2 py-2 px-4 text-sidebarText text-sm font-bold capitalize rounded-lg">
      <component :is="link.icon" class="fill-sidebarText w-6" />
      <span v-if="showMenu">{{ link.linkName }}</span>
      <ArrowDownIcon v-if="showMenu" class="fill-primary w-3 h-3 ml-auto" />

    </button>
    <div class="ml-6 border-l-2 border-primary200">

      <ul :class="{ hidden: !isLinksShow }">
        <SidebarLink class="link text-xs ml-3" v-for="sublink in link.subLinks" :link="sublink" :showMenu="showMenu" />
      </ul>
    </div>
  </li>
</template>
<style >
.link .router-link-active.router-link-exact-active {
  background-color: #CCE1DB;
  color: #0F172A;
}

.link .router-link-active.router-link-exact-active svg {
  fill: #0F172A;
}

.link {
  position: relative;
}

.link::after {
  position: absolute;
  content: '';
  width: 12px;
  height: 21px;
  border: 2px solid transparent;
  left: -14px;
  border-left-color: #CCE1DB;
  border-bottom-color: #CCE1DB;
  top: 40%;
  border-bottom-left-radius: 12px;
  transform: translateY(-50%);
}
</style>
