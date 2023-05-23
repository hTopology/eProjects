<script setup lang="ts">
import menu from "@/middleware/menu";
import MenuLink from "./MenuLink.vue";
defineProps({
  showMenu: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <aside
    :class="[{ 'w-16': showMenu }, { 'w-64': !showMenu }]"
    class="fixed top-0 left-0 z-40 h-screen pt-20 transition-all bg-primary"
  >
    <div class="h-full pb-4 overflow-y-auto bg-primary">
      <ul class="space-y-2 font-medium">
        <MenuLink
          v-for="item in menu[1]"
          :key="item.linkName"
          :showMenu="showMenu"
          :to="item.to"
          :icon="item.icon"
          :linkName="item.linkName"
        />
        <!-- <MenuLink
          :showMenu="showMenu"
          to="/profile"
          icon="fa-regular fa-user"
          linkName="profile"
        /> -->
      </ul>
    </div>
  </aside>
</template>
