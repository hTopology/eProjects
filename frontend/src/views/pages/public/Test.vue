<script setup lang="ts">
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import ProjectForm from "@/views/pages/admin/projects/ProjectForm.vue";

const tHeaders = ["id", "name ar", "name en"];
const tColumns = ["UNIT_ID", "UNIT_AR", "UNIT_EN"];
const required = ["UNIT_AR", "UNIT_EN"];
</script>

<template>
  <CrudPageLayout
    :filterForm="ProjectForm"
    entityId="units"
    :pKey="['UNIT_ID']"
    :form="ProjectForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
    :requiredControls="required"
  />
</template>
