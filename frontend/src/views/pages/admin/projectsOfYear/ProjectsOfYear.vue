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
const tHeaders = ["id", "name", "is active"];
const tabsOptions = {
  tabs: [
    "locations",
    "vendors",
    "members",
    "items",
    "donors",
    "locationCustomers",
    "locationMembers",
    "locationItems",
    "locationDonors",
  ],
  action: changeTab,
};
const tColumns = ["PROJECT_ID", "PROJECT", "IS_ACTIVE"];
const selectedProject = ref({}) as any;
const selectedFormOptions = ref();
const extendedData = ref();
const title = computed(() => selectedProject.value.PROJECT);
const addFormsOptions = ref({
  locations: {
    form: ProjectLocation,
    tHeaders: ["location", "is active"],
    tColumns: ["LOCATION", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID"],
    entityId: "projects_locations",
    baseSearch: [{ key: "location", value: "LOCATION" }],
  },
  vendors: {
    form: ProjectCustomer,
    tHeaders: ["vendor", "is active"],
    tColumns: ["CUSTOMER", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "CUSTOMER_ID"],
    entityId: "projects_customers",
    baseSearch: [{ key: "vendor", value: "CUSTOMER" }],
  },
  members: {
    form: ProjectMembers,
    tHeaders: ["member", "member type", "is active"],
    tColumns: ["MEMBER", "MEMBER_TYPE", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "MEMBER_ID"],
    entityId: "projects_members",
    baseSearch: [{ key: "member", value: "MEMBER" }],
  },
  items: {
    form: ProjectItems,
    tHeaders: ["item", "group", "is active"],
    tColumns: ["ITEM", "GROUP_DESC", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "ITEM_ID", "GROUP_ID"],
    entityId: "projects_items",
    baseSearch: [{ key: "item", value: "ITEM" }],
  },
  donors: {
    form: ProjectDonor,
    tHeaders: ["donor", "is active"],
    tColumns: ["DONOR", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "DONOR_ID"],
    entityId: "projects_donors",
    baseSearch: [{ key: "donor", value: "DONOR" }],
  },
  locationCustomers: {
    form: ProjectLocationCustomer,
    tHeaders: ["location", "vendor", "is active"],
    tColumns: ["LOCATION", "CUSTOMER", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "CUSTOMER_ID"],
    entityId: "locations_customers",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "vendor", value: "CUSTOMER" },
    ],
  },
  locationMembers: {
    form: ProjectLocationMember,
    tHeaders: ["location", "member", "is active"],
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
    tHeaders: ["location", "item", "is active"],
    tColumns: ["LOCATION", "ITEM", "IS_ACTIVE"],
    pKey: [
      "FISCAL_YEAR_ID",
      "PROJECT_ID",
      "LOCATION_ID",
      "GROUP_ID",
      "ITEM_ID",
    ],
    entityId: "locations_items",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "item", value: "ITEM" },
    ],
  },
  locationDonors: {
    form: ProjectLocationDonors,
    tHeaders: ["location", "donor", "is active"],
    tColumns: ["LOCATION", "DONOR", "IS_ACTIVE"],
    pKey: ["FISCAL_YEAR_ID", "PROJECT_ID", "LOCATION_ID", "DONOR_ID"],
    entityId: "locations_donors",
    baseSearch: [
      { key: "location", value: "LOCATION" },
      { key: "donor", value: "DONOR" },
    ],
  },
}) as any;

function openForm(data: Object) {
  selectedProject.value = data;
  extendedData.value = {
    FISCAL_YEAR_ID: selectedProject.value.FISCAL_YEAR_ID,
    PROJECT_ID: selectedProject.value.PROJECT_ID,
  };
  changeTab(tabsOptions.tabs[0]);
  console.log(data);
}
function changeTab(key: string) {
  selectedFormOptions.value = addFormsOptions.value[key];
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
    :openForm="openForm"
  />
  <CrudDailogLink
    v-if="selectedFormOptions"
    :onClose="onClose"
    :tabsOptions="tabsOptions"
    :selectedFormOptions="selectedFormOptions"
    :extendedData="extendedData"
    :title="selectedProject.PROJECT"
    :openForm="openForm"
  />
</template>
