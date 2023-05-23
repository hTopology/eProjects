<script setup lang="ts">
import { ref } from "vue";
import DeleteModal from "@/views/components/DeleteModal.vue";
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
function openDeleteModal(index: number) {
  selectedIndex.value = index;
  displayDeleteModal.value = true;
}
function closeDelteModal() {
  selectedIndex.value = -1;
  displayDeleteModal.value = false;
}
function confirmDelte() {
  props.onDelete(selectedIndex.value);
  closeDelteModal();
}
</script>

<template>
  <div class="relative overflow-x-auto">
    <table
      class="w-full text-sm text-left text-gray-500 border-spacing-y-2 border-separate"
    >
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr class="capitalize">
          <th
            scope="col"
            class="px-6 py-3"
            v-for="(thead, index) in tableContent.tHeaders"
            :key="index"
          >
            {{ thead }}
          </th>
          <th scope="col" class="px-6 py-3 text-end">action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="rounded-lg"
          :class="[
            { 'bg-gray-200': index % 2 != 0 },
            { 'bg-white': index % 2 == 0 },
          ]"
          v-for="(row, index) in tableContent.tData"
        >
          <td
            class="px-6 py-4"
            v-for="lable in tableContent.tColumns"
            :key="(lable as string)"
          >
            {{ row[lable as string] }}
          </td>
          <td
            class="px-6 py-4"
            :class="{ 'text-blue-600 cursor-pointer': lable.action }"
            v-for="lable in extendedColumns"
            @click="
              lable.action &&
                lable.action(
                  row[tableContent.tColumns[0]],
                  row[tableContent.tColumns[1]]
                )
            "
            :key="(lable as string)"
          >
            {{ lable.name }}
          </td>

          <td class="px-6 py-4 text-end">
            <button
              @click="onOpenForm('update', index)"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
            >
              <i class="fa-regular fa-pen-to-square text-lg"></i>
            </button>
            <button
              @click="openDeleteModal(index)"
              type="button"
              class="text-red-700 border-2 border-red-700 hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
            >
              <i class="fa-regular fa-trash-can text-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <DeleteModal
    v-if="displayDeleteModal"
    @confirmDelte="confirmDelte"
    @closeDelteModal="closeDelteModal"
  />
</template>
