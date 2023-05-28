<script setup lang="ts">
import Navbar from "@/views/components/layouts/navbar/Navbar.vue";
import LoginForm from "./LoginForm.vue";
import Footer from "@/views/components/layouts/footer/Footer.vue";
import { isAuthenticatedUser } from "@/services/sys.service";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import router from "@/router";
import { onMounted } from "vue";

const userStore = useUserStore();

onMounted(() => {
  if (userStore.getUser().USER_ID) {
    router.push("/");
  }
});

const loginData = ref({
  LOGIN_NAME: "",
  LOGIN_PASSWORD: "",
});
async function login() {
  let data = await isAuthenticatedUser(loginData.value);
  data = data[0];
  userStore.setUser(data);
  router.push("/");
}
</script>
<template>
  <Navbar />
  <LoginForm :login="login" :loginData="loginData" />
  <Footer />
</template>
