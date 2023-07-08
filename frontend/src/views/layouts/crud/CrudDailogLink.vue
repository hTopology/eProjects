<script setup lang="ts">
import { ref } from "vue";
import CrudDialogLayout from "@/views/layouts/crud/CrudDialogLayout.vue";
import CrudPageLayout from "@/views/layouts/crud/CrudPageLayout.vue";

const props = defineProps({
  lable: String,
  extendedFormData: Object,
  extendedData: Object,
  form: { type: Object, required: true },
  onClose: {
    type: Function,
    required: true,
  },
});
</script>
<template>
  <Teleport to="#modal">
    <CrudDialogLayout
      :title="'locations of: ' + props.form.title"
      :onClose="onClose"
      dialogWidth="max-w-5xl"
    >
      <template #formContent>
        <CrudPageLayout
          filterFormType="form"
          formPageType="current"
          :entityId="form.entityId"
          :pKey="form.pKey"
          :form="form.form"
          :tHeaders="form.tHeaders"
          :tColumns="form.tColumns"
          :extendedFormData="extendedFormData"
        />
      </template>
    </CrudDialogLayout>
  </Teleport>
</template>
