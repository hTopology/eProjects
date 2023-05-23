<script setup lang="ts">
import LoginInput from "./LoginInput.vue";
</script>
<template>
  <form class="bg-white p-16">
    <LoginInput type="text" labelName="user name" class="mb-3" />
    <LoginInput type="password" labelName="password" />
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
