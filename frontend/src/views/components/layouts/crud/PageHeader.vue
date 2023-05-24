<script setup lang="ts">
import Title from "../../Title.vue";
import Action from "./action/Action.vue";
import { inject } from "vue";

const title: any = inject("pageTitle");
</script>
<template>
  <div class="flex justify-between mb-5 pb-5 border-b-2 border-third">
    <Title :title="title" />
    <Action />
  </div>
</template>
