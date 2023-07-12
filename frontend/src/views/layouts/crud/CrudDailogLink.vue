<script setup lang="ts">
import { ref } from "vue";
import CrudDialogLayout from "@/views/layouts/crud/CrudDialogLayout.vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";

const props = defineProps({
  lable: String,
  extendedData: Object,
  selectedFormOptions: { type: Object, required: true },
  onClose: {
    type: Function,
    required: true,
  },
  projectName: String,
});
</script>
<template>
  <Teleport to="#modal">
    <CrudDialogLayout
      :title="selectedFormOptions.title"
      :onClose="onClose"
      dialogWidth="max-w-5xl"
    >
      <template #formContent>
        <CrudPageLayout
          formPageType="newPage"
          :entityId="selectedFormOptions.entityId"
          :pKey="selectedFormOptions.pKey"
          :form="selectedFormOptions.form"
          :tHeaders="selectedFormOptions.tHeaders"
          :tColumns="selectedFormOptions.tColumns"
          :extendedFormData="extendedData"
          :filterData="extendedData"
          :baseSearch="selectedFormOptions.baseSearch"
        />
      </template>
    </CrudDialogLayout>
  </Teleport>
</template>
