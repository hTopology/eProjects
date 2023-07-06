<script setup lang="ts">
import { provide } from "vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import MemberTypeForm from "./MemberTypeForm.vue";
import MeberTypeFilterForm from "./MeberTypeFilterForm.vue";

const tHeaders = ["id", "name"];
const tColumns = ["MEMBER_TYPE_ID", "MEMBER_TYPE"];
provide("pageTitle", "members types");
provide("baseSearch", [
  {
    key: "id",
    value: "MEMBER_TYPE_ID",
  },
  {
    key: "member type",
    value: "MEMBER_TYPE",
  },
]);
</script>

<template>
  <CrudPageLayout
    :filterForm="MeberTypeFilterForm"
    filterFormType="menu"
    entityId="members_types"
    :pKey="['MEMBER_TYPE_ID']"
    :form="MemberTypeForm"
    :tHeaders="tHeaders"
    :tColumns="tColumns"
    formPageType="current"
  />
</template>
