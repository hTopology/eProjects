<script setup lang="ts">
import menu from "@/middleware/menu";
import SidebarLink from "./SidebarLink.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";
import LogoutIcon from "../../icons/LogoutIcon.vue";
import UserInfo from "./UserInfo.vue";
import SideBarSubLinks from "./SideBarSubLinks.vue";
import HomeIcon from "../../icons/HomeIcon.vue";
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
      {
        'w-60 max-md:-translate-x-full ': showMenu,
      },
      {
        'md:w-auto z-50  max-md:translate-x-0 max-md:w-60 ': !showMenu,
      },
    ]"
    class="md:block max-md:absolute max-md:top-0 max-md:left-0 max-md:h-full bg-white transition-all"
  >
    <div class="flex flex-col pb-8 h-full">
      <UserInfo :showMenu="showMenu" />
      <ul class="space-y-2 p-4 font-medium h-full overflow-y-auto">
        <component
          :is="item.subLinks ? SideBarSubLinks : SidebarLink"
          v-for="item in menu[1]"
          :key="item.linkName"
          :showMenu="showMenu"
          :link="item"
        />
      </ul>

      <button
        @click="logout"
        style="background-color: #09244b08"
        class="flex items-center rounded-lg gap-2 py-2 px-4 mx-4 text-sidebarText text-lg font-bold capitalize"
      >
        <LogoutIcon class="fill-sidebarText" />
        <span :class="{ 'md:hidden ': !showMenu }">{{ $t("logout") }}</span>
      </button>
    </div>
  </aside>
</template>
