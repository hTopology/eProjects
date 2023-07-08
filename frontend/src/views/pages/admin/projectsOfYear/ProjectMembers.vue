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
const members = ref();
const membersTypes = ref();
onMounted(async () => {
  members.value = await getData("members");
  membersTypes.value = await getData("members_types");
});
function getData(entityId: string) {
  return post(`read/${entityId}`);
}
</script>

<template>
  <MainSelect lable="members" v-model="formData.MEMBER_ID" v-if="members">
    <option v-for="option in members" :value="option.MEMBER_ID">
      {{ option.MEMBER }}
    </option>
  </MainSelect>
  <MainSelect
    lable="members types"
    v-model="formData.MEMBER_TYPE_ID"
    v-if="membersTypes"
  >
    <option v-for="option in membersTypes" :value="option.MEMBER_TYPE_ID">
      {{ option.MEMBER_TYPE }}
    </option>
  </MainSelect>
  <CheckBox lable="is current" v-model="formData.IS_CURRENT" />
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
