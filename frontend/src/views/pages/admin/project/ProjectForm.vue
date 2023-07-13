<script setup lang="ts">
import CheckBox from "@/views/components/inputs/CheckBox.vue";
import MainInput from "@/views/components/inputs/MainInput.vue";
import { required, helpers, email } from "@vuelidate/validators";

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
  PROJECT: { required },
};
</script>

<template>
  <MainInput
    type="text"
    :autofocus="true"
    v-model="formData.PROJECT"
    lable="project *"
    :validation="v$?.PROJECT"
  />
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
