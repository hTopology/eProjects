<script setup lang="ts">
import { ref } from "vue";

import DeleteModal from "@/views/components/public/DeleteModal.vue";
import DeleteIcon from "@/views/components/icons/DeleteIcon.vue";
defineProps({
  confirm: Function,
});

const show = ref(false);
function close() {
  show.value = false;
}
</script>
<template>
  <button @click="show = true" type="button">
    <DeleteIcon />
  </button>
  <Teleport to="#modal">
    <DeleteModal
      v-if="show"
      @confirmDelte="close(), $emit('confirm')"
      @closeDelteModal="close()"
    />
  </Teleport>
</template>
