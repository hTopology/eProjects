<script setup lang="ts">
import CardItemDropdown from "@/views/components/public/CardItemDropdown.vue";
import CardItemInputQty from "@/views/components/public/CardItemInputQty.vue";
import CardItemText from "@/views/components/public/CardItemText.vue";
import CardItem from "@/views/components/public/CardItem.vue";

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
  <CardItem :data="data">
    <template v-slot:items="{ item }">
      <CardItemText headText="location" :text="item.LOCATION" />
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemInputQty headText="quantity" v-model="item.QTY" />
      <CardItemDropdown
        v-model="item.REMARK_ID"
        :options="item.ITEMS_REMARKS"
        text="REMARK"
        value="REMARK_ID"
        headText="remarks"
      />
    </template>
  </CardItem>
</template>
