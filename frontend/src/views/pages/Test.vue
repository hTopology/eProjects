<script setup lang="ts">
import CrudPageLayout from "../layouts/CrudPageLayout.vue";
import TestForm from "@/views/forms/TestForm.vue";

const tHeaders = ["id", "name ar", "name en"];
const tColumns = ["UNIT_ID", "UNIT_AR", "UNIT_EN"];
const required = ["UNIT_AR", "UNIT_EN"];
</script>

<template>
  <CrudPageLayout
    :filterForm="TestForm"
    entityId="units"
    :pKey="['UNIT_ID']"
    :form="TestForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
    :requiredControls="required"
  />
</template>
