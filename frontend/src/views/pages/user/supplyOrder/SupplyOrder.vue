<script setup lang="ts">
import PageHeader from "@/views/components/crud/PageHeader.vue";
import { ref } from "vue";
import { provide } from "vue";
import SupplyOrderItems from "./SupplyOrderItems.vue";
provide("pageTitle", "supply orders");
const data = ref({}) as any;
data.value.items = [
  {
    LOCATION_ID: 1,
    LOCATION: "location 1",
    GROUP_ID: 1,
    ITEM_ID: 1,
    ITEM: "item 1 ",
    QTY: 12,
    ITEMS_REMARKS: [
      { REMARK_ID: 1, REMARK: "item remark 1" },
      { REMARK_ID: 2, REMARK: "item remark 2" },
    ],
    REMARK_ID: 1,
  },
  {
    LOCATION_ID: 2,
    LOCATION: "location 2",
    GROUP_ID: 2,
    ITEM_ID: 2,
    ITEM: "item 2",
    QTY: 22,
    ITEMS_REMARKS: [
      { REMARK_ID: 1, REMARK: "item remark 1" },
      { REMARK_ID: 2, REMARK: "item remark 2" },
    ],
    REMARK_ID: 2,
  },
];
function save() {
  let formData = [];
  formData = data.value.items.map((item: any) => ({
    ITEM_ID: item.ITEM_ID,
    LOCATION_ID: item.LOCATION_ID,
    QTY: item.QTY,
    REMARK_ID: item.REMARK_ID || "",
  }));
  console.log(formData);
}
</script>
<template>
  <PageHeader title="supply order">
    <div class="flex items-center gap-4">
      <input type="date" class="bg-transparent outline-none" name="" id="" />
      <select
        class="bg-primary text-white outline-none py-2 px-4 block rounded-lg"
      >
        <option value="">select vendor</option>
        <option v-for="i in 5" value="i">{{ i }}</option>
      </select>
    </div>
  </PageHeader>
  <div class="px-10">
    <SupplyOrderItems :data="data" />
    <button @click="save">save</button>
  </div>
</template>
