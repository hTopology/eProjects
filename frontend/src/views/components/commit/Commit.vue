<script setup lang="ts">
import { ref } from "vue";
import SelectCommit from "@/views/components/commit/SelectCommit.vue";
import RecordCommit from "@/views/components/commit/RecordCommit.vue";
const showRecordCommit = ref(false);
</script>
<template>
  <SelectCommit v-model="showRecordCommit" />
  <RecordCommit v-if="showRecordCommit" />
</template>
