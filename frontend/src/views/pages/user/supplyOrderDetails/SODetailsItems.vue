<script setup lang="ts">
import CardItemText from "@/views/components/public/CardItemText.vue";
import ICard from "@/views/components/public/ICard.vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <ICard :data="data" :displayAction="false">
    <template v-slot:items="{ item }">
      <CardItemText headText="location" :text="item.LOCATION" />
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemText headText="item" :text="item.ITEM" />
    </template>
  </ICard>
</template>
