<script setup lang="ts">
import CloseIcon from "./icons/CloseIcon.vue";
import LoginInput from "./login/LoginInput.vue";
const modelValue = defineModel();
</script>
<template>
  <div
    @click="modelValue = true"
    class="fixed w-full h-full top-0 left-0 z-50"
    :class="[{ block: !modelValue }, { hidden: modelValue }]"
  ></div>
  <aside
    class="fixed top-0 right-0 z-50 h-screen transition-all bg-primary w-60 px-4 py-6"
    :class="[
      { 'translate-x-0': !modelValue },
      { 'translate-x-full': modelValue },
    ]"
  >
    <div class="h-full pb-4 overflow-y-auto bg-primary">
      <div class="flex items-center justify-between mb-6">
        <h4 class="font-bold text-white">Advanced Filter</h4>
        <button class="p-2" @click="modelValue = true">
          <CloseIcon class="fill-white" />
        </button>
      </div>
      <form>
        <LoginInput class="text-white" type="text" labelName="name" />
      </form>
    </div>
  </aside>
</template>
