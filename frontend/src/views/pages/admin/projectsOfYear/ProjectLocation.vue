<script setup lang="ts">
import { readData } from "@/middleware/script";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";
defineProps({
  formData: {
    type: Object,
    requried: true,
    default: {},
  },
  isEmpty: Boolean,
  v$: { type: Object, required: true },
});

const modelValue = defineModel();
modelValue.value = {};
const locations = ref();
onMounted(async () => {
  locations.value = await readData("locations");
});
</script>

<template>
  <MainSelect defaultOption="locations" v-model="formData.LOCATION_ID">
    <option v-for="location in locations" :value="location.LOCATION_ID">
      {{ location.LOCATION }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
