<script setup lang="ts">
import { provide } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import form from "./ProjectsOfYearForm.vue";
import filterForm from "./ProjectsOfYearFilterForm.vue";

const tHeaders = ["id", "name"];
const tColumns = ["PROJECT_ID", "PROJECT"];
provide("pageTitle", "projects of year");
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
    :filterForm="filterForm"
    filterFormType="form"
    entityId="projects_of_year"
    :pKey="['PROJECT_ID']"
    :form="form"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
  />
</template>
