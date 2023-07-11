<script setup lang="ts">
import CardItemAction from "@/views/components/public/CardItemAction.vue";
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
    <template v-slot:items="{ item, index }">
      <slot name="items" :item="item"></slot>
      <CardItemAction>
        <button @click="deleteItem(index)">
          <DeleteIcon class="w-4 h-4" />
        </button>
      </CardItemAction>
    </template>
  </ICard>
</template>
