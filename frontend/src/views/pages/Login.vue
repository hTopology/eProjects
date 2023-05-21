<script setup lang="ts">
import Header from "@/views/components/header/Header.vue";
import LoginForm from "@/views/components/LoginForm.vue";
import Footer from "@/views/components/footer/Footer.vue";
</script>
<template>
  <div
    class="h-screen bg-background flex items-center justify-between flex-col"
  >
    <Header />
    <LoginForm />
    <Footer />
  </div>
</template>
