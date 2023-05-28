<script setup lang="ts">
import LoginInput from "./LoginInput.vue";
defineProps({
  login: {
    type: Function,
    required: true,
  },
  loginData: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <form
    @submit.prevent="login()"
    class="bg-white p-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"
  >
    <LoginInput
      type="text"
      labelName="user name"
      class="mb-3"
      v-model="loginData.LOGIN_NAME"
    />
    <LoginInput
      type="password"
      labelName="password"
      v-model="loginData.LOGIN_PASSWORD"
    />
    <span class="">Forget Password?</span>
    <button
      type="submit"
      class="block bg-primary text-white w-full rounded py-3 mt-10"
    >
      Login
    </button>
  </form>
</template>
<style scoped>
form {
  width: 416px;
}
</style>
