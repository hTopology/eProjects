<script setup lang="ts">
import DownloadIcon from "@/views/components/icons/DownloadIcon.vue";

const props = defineProps({
  btnStyle: {
    type: String,
    default: "solid",
  },
  qrImage: String,
  icon: {
    type: Object,
    required: true,
  },
  btnText: String,
});
const style: any = {
  solid: {
    btn: "bg-primary text-white",
    icon: "fill-white",
  },
  borderd: {
    btn: " text-primary",
    icon: "fill-primary",
  },
};
</script>
<template>
  <div class="flex flex-col items-center">
    <img
      :src="qrImage"
      class="hidden md:block w-16 h-16"
      v-if="qrImage"
      alt=""
    />
    <button
      class="text-xs md:text-sm p-1 font-bold outline-none rounded-3xl capitalize flex items-center gap-2 border-2 border-primary"
      :class="style[props.btnStyle].btn"
    >
      <div class="border-r-2 px-2">
        <component :is="icon" :class="style[props.btnStyle].icon" />
      </div>
      {{ btnText }}
      <div class="border-l-2 px-2">
        <DownloadIcon :class="style[props.btnStyle].icon" />
      </div>
    </button>
  </div>
</template>
