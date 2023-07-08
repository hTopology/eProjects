<script setup lang="ts">
import CardItemAction from "@/views/components/public/CardItemAction.vue";
defineProps({
  cardItems: Object,
});
function deleteItem(data: any) {
  console.log(data);
}
</script>
<template>
  <li class="flex flex-wrap flex-col md:flex-row bg-white rounded-xl mb-3">
    <slot></slot>
    <CardItemAction @deleteItem="deleteItem(cardItems)" />
  </li>
</template>
