<script setup lang="ts">
import { provide } from "vue";
import CrudPageLayout from "../layouts/CrudPageLayout.vue";
import ProjectForm from "@/views/forms/ProjectForm.vue";
import ProjectFilterForm from "@/views/forms/ProjectFilterForm.vue";

const tHeaders = ["id", "name"];
const tColumns = ["MEMBER_TYPE_ID", "MEMBER_TYPE"];
provide("pageTitle", "members types");
</script>

<template>
  <CrudPageLayout
    :filterForm="ProjectFilterForm"
    filterFormType="menu"
    entityId="members_types"
    :pKey="['MEMBER_TYPE_ID']"
    :form="ProjectForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="dialog"
  />
</template>
