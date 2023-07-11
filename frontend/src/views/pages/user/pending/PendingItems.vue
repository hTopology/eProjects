<script setup lang="ts">
import CardItemText from "@/views/components/public/CardItemText.vue";
import ICard from "@/views/components/public/ICard.vue";
import DeleteIcon from "@/views/components/icons/DeleteIcon.vue";
import CardItemAction from "@/views/components/public/CardItemAction.vue";
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
    <template v-slot:items="{ item, index }">
      <CardItemText headText="location" :text="item.LOCATION" />
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemText headText="item" :text="item.ITEM" />
      <CardItemAction>
        <button @click="deleteItem(index)"><DeleteIcon /></button>
        <button @click="deleteItem(index)"><DeleteIcon /></button>
      </CardItemAction>
    </template>
  </ICard>
</template>
