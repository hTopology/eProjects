<script setup lang="ts">
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import MainButton from "../inputs/MainButton.vue";
import MessageIcon from "@/views/components/icons/MessageIcon.vue";
const remarks = [
  {
    REMARK_ID: 1,
    REMARK: "remark 1",
  },
  {
    REMARK_ID: 2,
    REMARK: "remark 2",
  },
];
const modelValue = defineModel();
</script>
<template>
  <div class="flex gap-6">
    <MainSelect :options="remarks" class="flex-1">
      <option v-for="remark in remarks" :value="remark.REMARK_ID">
        {{ remark.REMARK }}
      </option>
    </MainSelect>
    <MainButton
      :icon="MessageIcon"
      class="bg-primary"
      @click="modelValue = !modelValue"
    />
  </div>
</template>
