<script setup lang="ts">
const modelValue = defineModel();
</script>
<template>
  <aside
    class="fixed top-0 right-0 z-50 h-screen transition-all bg-primary w-60"
    :class="[
      { 'translate-x-0': !modelValue },
      { 'translate-x-full': modelValue },
    ]"
  >
    <div class="h-full pb-4 overflow-y-auto bg-primary">
      <form>
        <input type="text" />
      </form>
    </div>
  </aside>
</template>
