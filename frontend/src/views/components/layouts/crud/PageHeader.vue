<script setup lang="ts">
import Title from "../../Title.vue";
import Action from "./action/Action.vue";
import { inject } from "vue";

const title: any = inject("pageTitle");
</script>
<template>
  <div class="flex justify-between mb-6 py-4 px-10 border-b border-third">
    <Title :title="title" />
    <Action />
  </div>
</template>
