<script setup lang="ts">
import CardItemDropdown from "@/views/components/public/CardItemDropdown.vue";
import CardItemInputQty from "@/views/components/public/CardItemInputQty.vue";
import CardItemText from "@/views/components/public/CardItemText.vue";
import ICard from "@/views/components/public/ICard.vue";
import DeleteIcon from "@/views/components/icons/DeleteIcon.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
function deleteItem(index: number) {
  props.data.deletedItems = props.data.items.splice(index, 1);
}
</script>
<template>
  <ICard :data="data">
    <template v-slot:items="{ item }">
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemInputQty headText="quantity" v-model="item.QTY" />
      <CardItemInputQty headText="quantity" v-model="item.QTY" />
      <CardItemDropdown
        v-model="item.REMARK_ID"
        :options="item.ITEMS_REMARKS"
        text="REMARK"
        value="REMARK_ID"
        headText="remarks"
      />
    </template>
    <template v-slot:actions="{ index }">
      <button @click="deleteItem(index)"><DeleteIcon /></button>
    </template>
  </ICard>
</template>
