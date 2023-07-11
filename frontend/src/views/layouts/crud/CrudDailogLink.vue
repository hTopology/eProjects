<script setup lang="ts">
import { ref } from "vue";
import CrudDialogLayout from "@/views/layouts/crud/CrudDialogLayout.vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";

const props = defineProps({
  lable: String,
  extendedData: Object,
  form: { type: Object, required: true },
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
      :title="props.form.title + ' of: ' + extendedData?.PROJECT"
      :onClose="onClose"
      dialogWidth="max-w-5xl"
    >
      <template #formContent>
        <CrudPageLayout
          filterFormType="form"
          formPageType="newPage"
          :entityId="form.entityId"
          :pKey="form.pKey"
          :form="form.form"
          :tHeaders="form.tHeaders"
          :tColumns="form.tColumns"
          :extendedFormData="{
            FISCAL_YEAR_ID: extendedData?.FISCAL_YEAR_ID,
            PROJECT_ID: extendedData?.PROJECT_ID,
          }"
          :filterFormData="{
            FISCAL_YEAR_ID: extendedData?.FISCAL_YEAR_ID,
            PROJECT_ID: extendedData?.PROJECT_ID,
          }"
        />
      </template>
    </CrudDialogLayout>
  </Teleport>
</template>
