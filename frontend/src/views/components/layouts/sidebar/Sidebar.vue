<script setup lang="ts">
import menu from "@/middleware/menu";
import SidebarLink from "./SidebarLink.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import LogoutIcon from "../../icons/LogoutIcon.vue";
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
const userStore = useUserStore();
function logout() {
  userStore.emptyUser();
  router.push("/login");
}
</script>

<template>
  <aside
    :class="[
      { 'w-56': showMenu },
      { 'w-0 md:w-auto overflow-hidden': !showMenu },
    ]"
    class="md:block transition-all bg-primary"
  >
    <div class="flex flex-col justify-between py-8 h-full">
      <div class="pb-4 overflow-y-auto bg-primary">
        <ul class="space-y-4 font-medium">
          <SidebarLink
            v-for="item in menu[1]"
            :key="item.linkName"
            :showMenu="showMenu"
            :to="item.to"
            :icon="item.icon"
            :linkName="item.linkName"
          />
        </ul>
      </div>
      <button
        @click="logout"
        class="flex items-center gap-2 py-2 px-4 text-white text-lg font-bold capitalize"
      >
        <LogoutIcon class="fill-white" />
        <span v-if="showMenu">logout</span>
      </button>
    </div>
  </aside>
</template>
