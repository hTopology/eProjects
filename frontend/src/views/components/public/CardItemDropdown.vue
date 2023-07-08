<script setup lang="ts">
import MainSelect from "../inputs/MainSelect.vue";
import ICardItem from "./ICardItem.vue";
defineProps({
  options: Object,
  value: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  headText: String,
});
const modelValue = defineModel();
</script>
<template>
  <ICardItem :headText="headText">
    <select
      v-model="modelValue"
      class="bg-transparent outline-none border text-gray-900 text-sm block w-full border-none"
    >
      <option value="undefined" selected>Choose...</option>
      <option v-for="option in options" :value="option[value]">
        {{ option[text] }}
      </option>
    </select>
  </ICardItem>
</template>
