<script setup lang="ts">
import CardItemAction from "@/views/components/public/CardItemAction.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  displayAction: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <ul v-if="data?.items">
    <li
      class="flex flex-wrap flex-col md:flex-row bg-white rounded-xl mb-3"
      v-for="(item, index) in data.items"
      :data="data"
    >
      <slot name="items" :item="item"></slot>
      <CardItemAction v-if="displayAction">
        <slot name="actions" :index="index"></slot>
      </CardItemAction>
    </li>
  </ul>
</template>
