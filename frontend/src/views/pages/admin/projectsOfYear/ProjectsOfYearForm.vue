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
const projects = ref();
onMounted(() => {
  getProjects();
  props.formData.FISCAL_YEAR_ID = userStore.getUser().FISCAL_YEAR_ID;
});
async function getProjects() {
  projects.value = await post(`read/projects`, {});
  console.log(projects.value);
}
</script>

<template>
  <MainSelect v-model="formData.PROJECT_ID" v-if="projects">
    <option v-for="project in projects" :value="project.PROJECT_ID">
      {{ project.PROJECT }}
    </option>
  </MainSelect>
  <CheckBox lable="is closed" v-model="formData.IS_CLOSED" />
  <CheckBox lable="is active" v-model="formData.IS_ACTIVE" />
</template>
