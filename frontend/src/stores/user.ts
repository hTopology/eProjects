import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useUserStore = defineStore("user", () => {
  const data = useStorage("user", ref({}) as any);
  function setUser(res: any) {
    data.value = {
      USER_ID: res.USER_ID,
    };
  }
  function emptyUser() {
    data.value = {};
  }
  function getUser() {
    return data.value;
  }
  return { setUser, getUser, emptyUser };
});
