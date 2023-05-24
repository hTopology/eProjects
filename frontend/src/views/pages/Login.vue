<script setup lang="ts">
import Navbar from "@/views/components/layouts/navbar/Navbar.vue";
import LoginForm from "@/views/components/login/LoginForm.vue";
import Footer from "@/views/components/footer/Footer.vue";
import { isAuthenticatedUser } from "@/services/sys.service";
import { useUserStore } from "@/stores/user";
import { ref } from "vue";
import router from "@/router";

const userStore = useUserStore();

const loginData = ref({
  LOGIN_NAME: "",
  LOGIN_PASSWORD: "",
});
async function login() {
  // let data = await isAuthenticatedUser(loginData.value);
  userStore.setUser({ USER_ID: 1 });
  router.push("/");
}
</script>
<template>
  <Navbar />

  <LoginForm :login="login" :loginData="loginData" />

  <Footer />
</template>
