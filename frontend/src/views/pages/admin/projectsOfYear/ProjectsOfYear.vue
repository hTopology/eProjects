<script setup lang="ts">
import { provide, ref } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import form from "./ProjectsOfYearForm.vue";
import filterForm from "./ProjectsOfYearFilterForm.vue";
import ProjectLocation from "./ProjectLocation.vue";
import ProjectCustomer from "./ProjectCustomer.vue";
import CrudDailogLink from "@/views/layouts/crud/CrudDailogLink.vue";
const tHeaders = ["id", "name", "locations", "customers", "members"];
const locationFormData = ref();
const tColumns = [
  "PROJECT_ID",
  "PROJECT",
  {
    name: "locations",
    action: addLocations,
  },
  {
    name: "customers",
    action: addLocations,
  },
  {
    name: "members",
    action: addLocations,
  },
];
const addToProject = {
  locations: {
    form: ProjectLocation,
    title: "locations",
    tHeaders: ["location"],
    tColumns: ["LOCATION"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION"],
  },
} as any;
const selectedProject = ref();
const addMode = ref();
function addLocations(data: any, key: string) {
  selectedProject.value = data;
  addMode.value = addToProject[key];
}
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
function onClose() {
  addMode.value = null;
}
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
  <CrudDailogLink
    v-if="addMode"
    :onClose="onClose"
    :form="addToProject['locations']"
    :pKey="['FISCAL_YEAR_ID', 'PROJECT_ID', 'LOCATION']"
    :extendedFormData="{
      FISCAL_YEAR_ID: selectedProject?.FISCAL_YEAR_ID,
      PROJECT_ID: selectedProject?.PROJECT_ID,
    }"
  />
</template>
