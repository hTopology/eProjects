<script setup lang="ts">
import { provide, ref } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import form from "./ProjectsOfYearForm.vue";
import filterForm from "./ProjectsOfYearFilterForm.vue";
import ProjectLocation from "./ProjectLocation.vue";
import ProjectCustomer from "./ProjectCustomer.vue";
import ProjectMembers from "./ProjectMembers.vue";
import CrudDailogLink from "@/views/layouts/crud/CrudDailogLink.vue";
import ProjectLocationCustomer from "./ProjectLocationCustomer.vue";
import ProjectLocationMember from "./ProjectLocationMember.vue";
import { computed } from "vue";
import ProjectLocationDonors from "./ProjectLocationDonors.vue";
import ProjectLocationItems from "./ProjectLocationItems.vue";
import ProjectItems from "./ProjectItem.vue";
import ProjectDonor from "./ProjectDonor.vue";
// const table = [
//   {
//     th: "id",
//     td: "PROJECT_ID",
//   },
//   {
//     th: "name",
//     td: "PROJECT",
//   },
//   {
//     th: "locations",
//     td: "locations",
//     action: openForm,
//   },
// ];
const tHeaders = [
  "id",
  "name",
  "locations",
  "customers",
  "members",
  "items",
  "donors",
  "location customers",
  "location Members",
  "location items",
  "location donors",
];
const tColumns = [
  "PROJECT_ID",
  "PROJECT",
  {
    name: "locations",
    action: openForm,
  },
  {
    name: "customers",
    action: openForm,
  },
  {
    name: "members",
    action: openForm,
  },
  {
    name: "items",
    action: openForm,
  },
  {
    name: "donors",
    action: openForm,
  },
  {
    name: "locationCustomers",
    action: openForm,
  },
  {
    name: "locationMembers",
    action: openForm,
  },
  {
    name: "locationItems",
    action: openForm,
  },
  {
    name: "locationDonors",
    action: openForm,
  },
];
const selectedProject = ref({}) as any;
const selectedFormOptions = ref();
const extendedData = ref();
const title = computed(() => selectedProject.value.PROJECT);
const addFormsOptions = {
  locations: {
    form: ProjectLocation,
    title: "locations" + " of: " + title.value,
    tHeaders: ["location"],
    tColumns: ["LOCATION"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID"],
    entityId: "projects_locations",
    baseSearch: [{ key: "location", value: "LOCATION" }],
  },
  customers: {
    form: ProjectCustomer,
    title: "customers" + " of: ",
    tHeaders: ["customer"],
    tColumns: ["CUSTOMER"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "CUSTOMER_ID"],
    entityId: "projects_customers",
    baseSearch: [{ key: "customers", value: "CUSTOMER" }],
  },
  members: {
    form: ProjectMembers,
    title: "members" + " of: ",
    tHeaders: ["member", "member type"],
    tColumns: ["MEMBER", "MEMBER_TYPE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "MEMBER_ID"],
    entityId: "projects_members",
    baseSearch: [{ key: "member", value: "MEMBER" }],
  },
  items: {
    form: ProjectItems,
    title: "members" + " of: ",
    tHeaders: ["item", "group"],
    tColumns: ["ITEM", "GROUP_DESC"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "ITEM_ID", "GROUP_ID"],
    entityId: "projects_items",
    baseSearch: [{ key: "item", value: "ITEM" }],
  },
  donors: {
    form: ProjectDonor,
    title: "donors" + " of: ",
    tHeaders: ["donors"],
    tColumns: ["DONOR"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "DONOR_ID"],
    entityId: "projects_donors",
    baseSearch: [{ key: "donor", value: "DONOR" }],
  },
  locationCustomers: {
    form: ProjectLocationCustomer,
    title: "location Customers" + " of: ",
    tHeaders: ["location", "customer", "is active"],
    tColumns: ["LOCATION", "CUSTOMER", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "CUSTOMER_ID"],
    entityId: "locations_customers",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "customer", value: "CUSTOMER" },
    ],
  },
  locationMembers: {
    form: ProjectLocationMember,
    title: "location members" + " of: ",
    tHeaders: ["location", "members", "is active"],
    tColumns: ["LOCATION", "MEMBER", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "MEMBER_ID"],
    entityId: "locations_members",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "member", value: "MEMBER" },
    ],
  },
  locationItems: {
    form: ProjectLocationItems,
    title: "location items" + " of: ",
    tHeaders: ["location", "items", "is active"],
    tColumns: ["LOCATION", "ITEM", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "ITEM_ID"],
    entityId: "locations_item",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "item", value: "ITEM" },
    ],
  },
  locationDonors: {
    form: ProjectLocationDonors,
    title: "location donors" + " of: ",
    tHeaders: ["location", "donors", "is active"],
    tColumns: ["LOCATION", "DONOR", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "DONOR_ID"],
    entityId: "locations_donors",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "donor", value: "DONOR" },
    ],
  },
} as any;

function openForm(data: any, key: string) {
  selectedProject.value = data;
  extendedData.value = {
    FISCAL_YEAR_ID: selectedProject.value.FISCAL_YEAR_ID,
    PROJECT_ID: selectedProject.value.PROJECT_ID,
  };
  selectedFormOptions.value = addFormsOptions[key];
}
const baseSearch = [
  {
    key: "id",
    value: "PROJECT_ID",
  },
  {
    key: "project",
    value: "PROJECT",
  },
];
function onClose() {
  selectedFormOptions.value = null;
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
    :baseSearch="baseSearch"
  />
  <CrudDailogLink
    v-if="selectedFormOptions"
    :onClose="onClose"
    :selectedFormOptions="selectedFormOptions"
    :extendedData="extendedData"
  />
</template>
