<script setup lang="ts">
import MainInput from "../components/MainInput.vue";
import { required } from "@vuelidate/validators";

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
  MEMBER_TYPE: { required },
};
</script>

<template>
  <MainInput
    type="text"
    :autofocus="true"
    v-model="formData.MEMBER_TYPE"
    lable="member type *"
    :isEmpty="isEmpty"
    :validation="v$?.MEMBER_TYPE"
  />
</template>
