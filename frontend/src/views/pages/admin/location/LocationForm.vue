<script setup lang="ts">
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";
import { required, helpers, email } from "@vuelidate/validators";
import { ref, onMounted } from "vue";
import { post } from "@/services/crud.service";
import CheckBox from "@/views/components/inputs/CheckBox.vue";

onMounted(async () => {
  cities.value = await getDropdownData("cities");
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
  CITY_ID: { required },
  ZONE_ID: { required },
};
const cities = ref();
const zones = ref();
async function getZones() {
  zones.value = await getDropdownData("zones", {
    CITY_ID: props.formData.CITY_ID,
  });
}
function getDropdownData(entityId: string, body: any = {}) {
  return post(`read/${entityId}`, body);
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
    :validation="v$?.CITY_ID"
  >
    <option v-for="city in cities" :value="city.CITY_ID">
      {{ city.CITY }}
    </option>
  </MainSelect>
  <MainSelect
    lable="zone"
    v-model="formData.ZONE_ID"
    :options="zones"
    :validation="v$?.ZONE_ID"
  >
    <option v-for="zone in zones" :value="zone.ZONE_ID">
      {{ zone.ZONE }}
    </option>
  </MainSelect>
  <MainInput type="text" v-model="formData.LONGITUDE" lable="longitude" />
  <MainInput type="text" v-model="formData.LATITUDE" lable="latitude" />
  <CheckBox lable="is active" class="flex-auto" v-model="formData.IS_ACTIVE" />
</template>
