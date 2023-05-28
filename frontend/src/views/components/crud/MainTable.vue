<script setup lang="ts">
import { ref } from "vue";
import DeleteModal from "@/views/components/public/DeleteModal.vue";
import EditIcon from "@/views/components/icons/EditIcon.vue";
import DeleteIcon from "@/views/components/icons/DeleteIcon.vue";
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
      <thead class="text-xs text-gray-700 uppercase bg-white">
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
              { 'bg-tableRow': index % 2 === 0 },
              { 'bg-white': index % 2 != 0 },
              { 'rounded-tl-xl rounded-bl-xl': tedIndex == 0 },
            ]"
          >
            {{ row[lable as string] }}
          </td>
          <td
            class="px-6 py-3"
            :class="[
              { 'text-blue-600 cursor-pointer': lable.action },
              { 'bg-tableRow': index % 2 === 0 },
              { 'bg-white': index % 2 != 0 },
            ]"
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
              <button @click="openDeleteModal(index)" type="button">
                <DeleteIcon />
              </button>
            </div>
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
