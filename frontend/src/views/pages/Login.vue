<script setup lang="ts">
import Header from "@/views/components/layouts/header/Header.vue";
import LoginForm from "@/views/components/login/LoginForm.vue";
import Footer from "@/views/components/footer/Footer.vue";
</script>
<template>
  <div class="h-screen flex items-center justify-between flex-col">
    <Header />
    <LoginForm />
    <Footer />
  </div>
</template>
