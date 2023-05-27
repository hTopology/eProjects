<script setup lang="ts">
import { provide } from "vue";
import CrudPageLayout from "../layouts/CrudPageLayout.vue";
import ProjectForm from "@/views/forms/ProjectForm.vue";
import ProjectFilterForm from "@/views/forms/ProjectFilterForm.vue";

const tHeaders = ["id", "name"];
const tColumns = ["PROJECT_ID", "PROJECT"];
const required = ["PROJECT"];
provide("pageTitle", "projects");
provide("baseSearch", [
  {
    key: "id",
    value: "PROJECT_ID",
  },
  {
    key: "project",
    value: "PROJECT",
  },
]);
</script>

<template>
  <CrudPageLayout
    :filterForm="ProjectFilterForm"
    filterFormType="form"
    entityId="projects"
    :pKey="['PROJECT_ID']"
    :form="ProjectForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
    :requiredControls="required"
  />
</template>
