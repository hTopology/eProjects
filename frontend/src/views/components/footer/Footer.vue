<script setup lang="ts">
import FooterBtn from "./FooterBtn.vue";
import AppleIcon from "../icons/AppleIcon.vue";
import GooglePlayIcon from "../icons/GooglePlayIcon.vue";
</script>
<template>
  <footer class="p-4 md:py-4 md:px-16 w-full bg-white fixed bottom-0">
    <div class="flex justify-between items-center mb-6">
      <div class="hidden md:block">
        <RouterLink to="/" class="flex">
          <img src="/image/lgLogo.svg" alt="logo image" />
        </RouterLink>
      </div>
      <div class="md:w-auto md:gap-5 flex justify-between w-full">
        <FooterBtn
          btnText="app store"
          qrImage="/eProjects/image/appStoreQr.svg"
          :icon="AppleIcon"
        />
        <FooterBtn
          btnText="google play"
          btnStyle="borderd"
          qrImage="/eProjects/image/googlePlayQr.svg"
          :icon="GooglePlayIcon"
        />
      </div>
    </div>
    <div
      class="text-xs md:text-sm md:flex-row flex-col text-center flex justify-between border-t border-secodry"
    >
      <p class="font-bold">2023 © All rights reserved</p>
      <p class="">
        General Directorate of Endowments Ministry of Endowments and Islamic
        Affairs State of Qatar
      </p>
    </div>
  </footer>
</template>
