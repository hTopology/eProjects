<script setup lang="ts">
import { ref } from "vue";
import CrudDialogLayout from "@/views/layouts/crud/CrudDialogLayout.vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";
import Tabs from "@/views/components/public/Tabs.vue";

const props = defineProps({
  lable: String,
  title: String,
  extendedData: Object,
  selectedFormOptions: { type: Object, required: true },
  onClose: {
    type: Function,
    required: true,
  },
  projectName: String,
  tabsOptions: Object,
});
</script>
<template>
  <Teleport to="#modal">
    <CrudDialogLayout :onClose="onClose" dialogWidth="max-w-6xl">
      <template #formContent>
        <CrudPageLayout
          :title="title"
          formPageType="newPage"
          :entityId="selectedFormOptions.entityId"
          :pKey="selectedFormOptions.pKey"
          :form="selectedFormOptions.form"
          :tHeaders="selectedFormOptions.tHeaders"
          :tColumns="selectedFormOptions.tColumns"
          :extendedFormData="extendedData"
          :filterData="extendedData"
          :baseSearch="selectedFormOptions.baseSearch"
        >
          <template #tabs>
            <Tabs :tabsOptions="tabsOptions" v-if="tabsOptions" />
          </template>
        </CrudPageLayout>
      </template>
    </CrudDialogLayout>
  </Teleport>
</template>
