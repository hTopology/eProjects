<script setup lang="ts">
import { provide } from "vue";
import CrudPageLayout from "../layouts/CrudPageLayout.vue";
import ProectForm from "@/views/forms/ProectForm.vue";

const tHeaders = ["id", "name"];
const tColumns = ["PROJECT_ID", "PROJECT"];
const required = ["PROJECT"];
provide("pageTitle", "projects");
</script>

<template>
  <CrudPageLayout
    :filterForm="ProectForm"
    entityId="projects"
    :pKey="['PROJECT_ID']"
    :form="ProectForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
    :requiredControls="required"
  />
</template>
