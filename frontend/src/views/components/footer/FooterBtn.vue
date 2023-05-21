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
    btn: "bg-primary text-white",
    icon: "border-white",
  },
  borderd: {
    btn: "border-2 border-primary text-primary",
    icon: "border-primary",
  },
};
</script>
<template>
  {{}}
  <div class="flex flex-col items-center">
    <img :src="qrImage" v-if="qrImage" alt="" />
    <button
      class="outline-none rounded-3xl p-2 capitalize flex items-center gap-2"
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
