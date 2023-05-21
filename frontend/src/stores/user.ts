import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';
export const useUserStore = defineStore('user', () => {
  const data = useStorage('user', ref({}) as any);
  function setUser(res: any) {
    data.value = {
      USER_ID: res.USER_ID,
      USER_TYPE_ID: res.USER_TYPE_ID,
      USER_NAME_AR: res.USER_NAME_AR,
      USER_NAME_EN: res.USER_NAME_EN,
      MOBILE: res.MOBILE,
      USER_IMAGE_URL: res.USER_IMAGE_URL,
      OWNER_ID: res.OWNERS[0].OWNER_ID,
      OWNER: res.OWNERS[0].OWNER,
      CONTACT_NAME: res.OWNERS[0].CONTACT_NAME,
      CONTACT_MOBILE: res.OWNERS[0].CONTACT_MOBILE,
      OWNER_IMAGE_URL: res.OWNERS[0].OWNER_IMAGE_URL
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
