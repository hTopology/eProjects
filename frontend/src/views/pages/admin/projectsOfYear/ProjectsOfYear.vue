<script setup lang="ts">
import { provide, ref } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import form from "./ProjectsOfYearForm.vue";
import filterForm from "./ProjectsOfYearFilterForm.vue";
import ProjectLocation from "./ProjectLocation.vue";
import ProjectCustomer from "./ProjectCustomer.vue";
import ProjectMembers from "./ProjectMembers.vue";
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
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID"],
    entityId: "projects_locations",
  },
  customers: {
    form: ProjectCustomer,
    title: "customers",
    tHeaders: ["customer"],
    tColumns: ["CUSTOMER"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "CUSTOMER_ID"],
    entityId: "projects_customers",
  },
  members: {
    form: ProjectMembers,
    title: "members",
    tHeaders: ["member", "member type"],
    tColumns: ["MEMBER", "MEMBER_TYPE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "MEMBER_ID"],
    entityId: "projects_members",
  },
} as any;
const selectedProject = ref();
const addMode = ref();
function addLocations(data: any, key: string) {
  selectedProject.value = data;
  addMode.value = addToProject[key];
}
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
    title="projects of years"
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
    :form="addMode"
    :pKey="['FISCAL_YEAR_ID', 'PROJECT_ID', 'LOCATION']"
    :extendedData="selectedProject"
  />
</template>
