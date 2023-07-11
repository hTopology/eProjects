<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <ul v-if="data?.items">
    <li
      class="flex flex-wrap flex-col md:flex-row py-4 bg-white rounded-xl mb-3"
      v-for="(item, index) in data.items"
      :data="data"
    >
      <slot name="items" :item="item" :index="index"></slot>
    </li>
  </ul>
</template>
