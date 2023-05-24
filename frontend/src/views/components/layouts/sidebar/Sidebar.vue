<script setup lang="ts">
import menu from "@/middleware/menu";
import HomeIcon from "@/views/components/icons/HomeIcon.vue";
import SidebarLink from "./SidebarLink.vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";
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
    :class="[{ 'w-16': showMenu }, { 'w-64': !showMenu }]"
    class="fixed hidden md:block top-0 left-0 z-40 h-screen pt-20 transition-all bg-primary"
  >
    <div class="h-full pb-4 overflow-y-auto bg-primary">
      <ul class="space-y-2 font-medium">
        <SidebarLink
          v-for="item in menu[1]"
          :key="item.linkName"
          :showMenu="showMenu"
          :to="item.to"
          :icon="item.icon"
          :linkName="item.linkName"
        />

        <li>
          <button
            @click="logout"
            class="flex items-center p-2 text-white text-lg font-bold capitalize w-full"
          >
            <HomeIcon class="fill-white" />
            <span class="ml-3" v-if="!showMenu">logout</span>
          </button>
        </li>
        <!-- <SidebarLink
          :showMenu="showMenu"
          to="/profile"
          icon="fa-regular fa-user"
          linkName="profile"
        /> -->
      </ul>
    </div>
  </aside>
</template>
