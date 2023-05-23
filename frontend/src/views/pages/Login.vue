<script setup lang="ts">
import Navbar from "@/views/components/layouts/navbar/Navbar.vue";
import LoginForm from "@/views/components/login/LoginForm.vue";
import Footer from "@/views/components/footer/Footer.vue";
</script>
<template>
  <div class="h-screen flex items-center justify-between flex-col">
    <Navbar />
    <LoginForm />
    <Footer />
  </div>
</template>
