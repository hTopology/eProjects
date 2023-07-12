<script setup lang="ts">
import { ref } from "vue";
import EditIcon from "@/views/components/icons/EditIcon.vue";
import DeleteButton from "@/views/components/public/DeleteButton.vue";
import CrudDailogLink from "@/views/layouts/crud/CrudDailogLink.vue";
const props = defineProps({
  tableContent: {
    type: Object,
    required: true,
  },
  onOpenForm: {
    type: Function,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
  extendedColumns: Object,
});

const displayDeleteModal = ref(false);
const selectedIndex = ref(-1);
// function openDeleteModal(index: number) {
//   selectedIndex.value = index;
//   displayDeleteModal.value = true;
// }
// function closeDelteModal() {
//   selectedIndex.value = -1;
//   displayDeleteModal.value = false;
// }
function confirmDelte(index: number) {
  props.onDelete(index);
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left text-textPrimary border-spacing-y-2 border-separate"
    >
      <thead class="text-xs uppercase bg-primary text-white">
        <tr class="capitalize rounded-3xl">
          <th
            class="px-6 py-4"
            v-for="(thead, thIndex) in tableContent.tHeaders"
            :class="{ 'rounded-tl-xl rounded-bl-xl': thIndex == 0 }"
            :key="thIndex"
          >
            {{ thead }}
          </th>
          <th class="px-6 py-3 text-end rounded-tr-xl rounded-br-xl">action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="rounded-lg" v-for="(row, index) in tableContent.tData">
          <td
            v-for="(lable, tedIndex) in tableContent.tColumns"
            :key="(lable as string)"
            class="px-6 py-3"
            :class="[
              { 'text-blue-600 cursor-pointer underline': lable.action },
              { 'bg-tableRow': index % 2 === 0 },
              { 'bg-white': index % 2 != 0 },
              { 'rounded-tl-xl rounded-bl-xl': tedIndex == 0 },
            ]"
            @click="lable.action && lable.action(row, lable.name)"
          >
            {{ row[lable as string] || lable.name }}
          </td>

          <td
            class="text-end rounded-tr-xl rounded-br-xl px-6 py-3"
            :class="[
              { 'bg-tableRow': index % 2 === 0 },
              { 'bg-white': index % 2 != 0 },
            ]"
          >
            <div class="flex justify-end gap-6">
              <button
                @click="onOpenForm('update', index)"
                type="button"
                class=""
              >
                <EditIcon />
              </button>
              <DeleteButton @confirm="confirmDelte(index)" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
