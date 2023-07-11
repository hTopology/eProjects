<script setup lang="ts">
import { ref } from "vue";
import ArrowDownIcon from "../../icons/ArrowDownIcon.vue";
import SidebarLink from "./SidebarLink.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
const isOpenLink = ref(false);
const props = defineProps({
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
const route = useRoute();
const activeLink = computed(() => {
  if (props.link.subLinks.some((obj: any) => obj["to"] === route.path)) {
    return true;
  } else {
    isLinksShow.value = false;
    return false;
  }
});
</script>
<template>
  <li>
    <button
      @click="isLinksShow = !isLinksShow"
      :class="{ 'bg-primary text-white': activeLink }"
      class="btn w-full flex items-center gap-2 py-2 px-4 text-sidebarText text-sm font-bold capitalize rounded-lg"
    >
      <component
        :is="link.icon"
        class="fill-sidebarText w-6"
        :class="{ 'fill-white': activeLink }"
      />
      <span :class="{ 'md:hidden ': !showMenu }">{{ link.linkName }}</span>
      <ArrowDownIcon
        class="fill-primary w-3 h-3 ml-auto"
        :class="[{ 'fill-white': activeLink }, { 'md:hidden ': !showMenu }]"
      />
    </button>
    <div class="ml-6 border-l-2 border-primary200 mt-2">
      <ul :class="{ hidden: !isLinksShow }">
        <SidebarLink
          class="link text-xs ml-3"
          v-for="sublink in link.subLinks"
          :link="sublink"
          :showMenu="showMenu"
        />
      </ul>
    </div>
  </li>
</template>
<style>
.link .router-link-active.router-link-exact-active {
  background-color: #cce1db;
  color: #0f172a;
}

.link .router-link-active.router-link-exact-active svg {
  fill: #0f172a;
}

.link {
  position: relative;
}

.link::after {
  position: absolute;
  content: "";
  width: 12px;
  height: 21px;
  border: 2px solid transparent;
  left: -14px;
  border-left-color: #cce1db;
  border-bottom-color: #cce1db;
  top: 40%;
  border-bottom-left-radius: 12px;
  transform: translateY(-50%);
}
</style>
