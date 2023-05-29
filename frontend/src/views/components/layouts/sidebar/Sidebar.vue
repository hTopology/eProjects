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
    :class="[{ 'w-60': showMenu }, { 'w-0 md:w-auto': !showMenu }]"
    class="md:block transition-all bg-white"
  >
    <div class="flex flex-col pb-8 h-full">
      <UserInfo :showMenu="showMenu" />
      <ul class="space-y-2 p-4 font-medium h-full overflow-y-auto">
        <SidebarLink
          v-for="item in menu[1].defaultLinks"
          :key="item.linkName"
          :showMenu="showMenu"
          :to="item.to"
          :icon="item.icon"
          :linkName="item.linkName"
        />
        <SideBarSubLinks
          :showMenu="showMenu"
          v-for="item in menu[1].subLinks"
          :key="item.linkName"
          :links="item.links"
          :icon="HomeIcon"
          :linkName="item.linkName"
        />
      </ul>

      <button
        @click="logout"
        style="background-color: #09244b08"
        class="flex items-center rounded-lg gap-2 py-2 px-4 mx-4 text-sidebarText text-lg font-bold capitalize"
      >
        <LogoutIcon class="fill-sidebarText" />
        <span v-if="showMenu">logout</span>
      </button>
    </div>
  </aside>
</template>
