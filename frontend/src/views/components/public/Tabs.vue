<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
const props = defineProps({
  tabsOptions: Object,
});
const selectedOption = ref();
onMounted(() => {
  if (props.tabsOptions) selectedOption.value = props.tabsOptions.tabs[0];
  console.log(props.tabsOptions);
});
</script>
<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center border-b"
    v-if="tabsOptions"
  >
    <li
      v-for="tab in tabsOptions.tabs"
      @click="tabsOptions.action(tab), (selectedOption = tab)"
      class="cursor-pointer px-6 py-4"
      :class="{
        'border-b border-blue-500 text-blue-700': selectedOption == tab,
      }"
    >
      {{ tab }}
    </li>
  </ul>
</template>
