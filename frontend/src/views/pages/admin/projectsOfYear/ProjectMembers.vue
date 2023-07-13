<script setup lang="ts">
import { readData } from "@/middleware/script";
import { post } from "@/services/crud.service";
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainSelect from "@/views/components/inputs/MainSelect.vue";
import { onMounted } from "vue";
import { ref } from "vue";
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
const members = ref();
const membersTypes = ref();
onMounted(async () => {
  members.value = await readData("members");
  membersTypes.value = await readData("members_types");
});
</script>

<template>
  <MainSelect defaultOption="member" v-model="formData.MEMBER_ID">
    <option v-for="option in members" :value="option.MEMBER_ID">
      {{ option.MEMBER }}
    </option>
  </MainSelect>
  <MainSelect defaultOption="member type" v-model="formData.MEMBER_TYPE_ID">
    <option v-for="option in membersTypes" :value="option.MEMBER_TYPE_ID">
      {{ option.MEMBER_TYPE }}
    </option>
  </MainSelect>
  <CheckBox lable="is current" v-model="formData.IS_CURRENT" />
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
