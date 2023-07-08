<script setup lang="ts">
import PlusIcon from "../icons/PlusIcon.vue";
import ICardItem from "./ICardItem.vue";
defineProps({
  headText: String,
});
const modelValue = defineModel();
</script>
<template>
  <ICardItem :headText="headText">
    <div class="flex gap-2 items-center justify-center">
      <PlusIcon />
      <!-- <p>{{ modelValue }}</p> -->
      <input
        type="number"
        class="outline-none block h-5 w-10 border-none text-center"
        v-model="modelValue"
      />
      <PlusIcon />
    </div>
  </ICardItem>
</template>
<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
