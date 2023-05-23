<script setup lang="ts">
const props = defineProps({
  btnStyle: {
    type: String,
    default: "solid",
  },
  qrImage: String,
  icon: String,
});
const style: any = {
  solid: {
    btn: "bg-primary text-white border-primary",
    icon: "border-white",
  },
  borderd: {
    btn: " border-primary text-primary",
    icon: "border-primary",
  },
};
</script>
<template>
  {{}}
  <div class="flex flex-col items-center">
    <img
      :src="qrImage"
      class="hidden md:block w-16 h-16"
      v-if="qrImage"
      alt=""
    />
    <button
      class="text-xs md:text-sm p-1 font-bold outline-none rounded-3xl capitalize flex items-center gap-2 border-2"
      :class="style[props.btnStyle].btn"
    >
      <i
        class="border-r-2 px-2"
        :class="[icon, style[props.btnStyle].icon]"
      ></i>
      app store
      <i
        class="fa-solid fa-cloud-arrow-down border-l-2 px-2"
        :class="style[props.btnStyle].icon"
      ></i>
    </button>
  </div>
</template>
