<script setup lang="ts">
import ICardItem from "./ICardItem.vue";
defineProps({
  text: String,
  headText: String,
});
</script>
<template>
  <ICardItem :headText="headText">
    <p>{{ text }}</p>
  </ICardItem>
</template>
