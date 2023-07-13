<script setup lang="ts">
import { provide, ref } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import LocationForm from "./LocationForm.vue";
import LocationFilterForm from "./LocationFilterForm.vue";

const tHeaders = ["id", "location", "city", "zone", "is active"];
const tColumns = ["LOCATION_ID", "LOCATION", "CITY", "ZONE", "IS_ACTIVE"];

const baseSearch = [
  {
    key: "id",
    value: "LOCATION_ID",
  },
  {
    key: "location",
    value: "LOCATION",
  },
  {
    key: "city",
    value: "CITY",
  },
  {
    key: "zone",
    value: "ZONE",
  },
];
</script>

<template>
  <CrudPageLayout
    title="locations"
    :filterForm="LocationFilterForm"
    filterFormType="form"
    entityId="locations"
    :pKey="['LOCATION_ID']"
    :form="LocationForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    :baseSearch="baseSearch"
    formPageType="newPage"
  />
</template>
