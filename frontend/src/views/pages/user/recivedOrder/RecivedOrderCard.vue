<script setup lang="ts">
import CardItemDropdown from "@/views/components/public/CardItemDropdown.vue";
import CardItemInputQty from "@/views/components/public/CardItemInputQty.vue";
import CardItemText from "@/views/components/public/CardItemText.vue";
import ICard from "@/views/components/public/ICard.vue";
defineProps({
  cardItems: Object,
});
</script>
<template>
  <ICard v-if="cardItems" :cardItems="cardItems">
    <CardItemText headText="item" :text="cardItems.ITEM" />
    <CardItemInputQty headText="quantity" v-model="cardItems.QTY" />
    <CardItemInputQty headText="quantity" v-model="cardItems.QTY" />
    <CardItemDropdown
      :options="cardItems.ITEMS_REMARKS"
      text="REMARK"
      value="REMARK_ID"
      headText="remarks"
    />
  </ICard>
</template>
