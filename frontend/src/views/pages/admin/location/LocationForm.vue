<script setup lang="ts">
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";
import { required, helpers, email } from "@vuelidate/validators";
import { ref, onMounted } from "vue";
import { post } from "@/services/crud.service";
import CheckBox from "@/views/components/inputs/CheckBox.vue";

onMounted(() => {
  getCities();
  if (props.formData.CITY_ID) getZones();
});
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
modelValue.value = {
  LOCATION: { required },
};
const cities = ref();
async function getCities() {
  cities.value = await post(`read/cities`);
}
const zones = ref();
async function getZones() {
  zones.value = await post(`read/zones`, { CITY_ID: props.formData.CITY_ID });
}
</script>

<template>
  <MainInput
    type="text"
    :autofocus="true"
    v-model="formData.LOCATION"
    lable="location *"
    :validation="v$?.LOCATION"
  />
  <MainSelect
    lable="city"
    @change="getZones"
    v-model="formData.CITY_ID"
    :options="cities"
  >
    <option v-for="city in cities" :value="city.CITY_ID">
      {{ city.CITY }}
    </option>
  </MainSelect>
  <MainSelect lable="zone" v-model="formData.ZONE_ID" :options="zones">
    <option v-for="zone in zones" :value="zone.ZONE_ID">
      {{ zone.ZONE }}
    </option>
  </MainSelect>
  <MainInput type="text" v-model="formData.LONGITUDE" lable="longitude" />
  <MainInput type="text" v-model="formData.LATITUDE" lable="latitude" />
  <CheckBox lable="is active" class="flex-auto" v-model="formData.IS_ACTIVE" />
</template>
