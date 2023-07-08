<script setup lang="ts">
import { post } from "@/services/crud.service";
import { useUserStore } from "@/stores/user";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";

const userStore = useUserStore();
const props = defineProps({
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
onMounted(() => {
  getLocations();
});
async function getLocations() {
  locations.value = await post(`read/customers`);
  console.log(locations.value);
}
</script>

<template>
  <MainSelect v-model="formData.LOCATION_ID" v-if="locations">
    <option v-for="location in locations" :value="location.LOCATION_ID">
      {{ location.LOCATION }}
    </option>
  </MainSelect>
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
