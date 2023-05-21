<script setup lang="ts">
import FooterBtn from "./FooterBtn.vue";
</script>
<template>
  <footer class="w-full py-6 px-16 bg-white">
    <div class="flex justify-between items-center mb-6">
      <div class="">
        <RouterLink to="/" class="flex">
          <img src="/image/lgLogo.svg" alt="logo image" />
        </RouterLink>
      </div>
      <div class="flex gap-5">
        <FooterBtn qrImage="/image/appStoreQr.svg" icon="fa-brands fa-apple" />
        <FooterBtn
          btnStyle="borderd"
          qrImage="/image/googlePlayQr.svg"
          icon="fa-brands fa-google-play"
        />
      </div>
    </div>
    <div class="flex justify-between border-t border-secodry">
      <p class="">2023 © All rights reserved</p>
      <p class="font-bold text-sm">
        General Directorate of Endowments Ministry of Endowments and Islamic
        Affairs State of Qatar
      </p>
    </div>
  </footer>
</template>
