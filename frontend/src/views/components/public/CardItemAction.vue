<script setup lang="ts">
import ICardItem from "@/views/components/public/ICardItem.vue";
import DeleteIcon from "@/views/components/icons/DeleteIcon.vue";
</script>
<template>
  <ICardItem headText="action">
    <button @click="$emit('deleteItem')"><DeleteIcon /></button>
  </ICardItem>
</template>
