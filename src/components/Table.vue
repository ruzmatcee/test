<template>
  <div class="overflow-x-auto rounded-lg">
    <table class="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
      <thead>
        <tr class="bg-gray-100">
          <th v-for="column in columns" :key="column.key"
            class="border-b border-gray-300 p-3 text-left text-gray-600 uppercase text-xs lg:text-base font-bold">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data" :key="row.name" class="hover:bg-gray-50 transition">
          <td v-for="column in columns" :key="column.key"
            class="border-b border-gray-300 md:p-3 text-sm md:text-base lg:text-lg 2xl:text-xl">
            <!-- Tags -->
            <template v-if="Array.isArray(row[column.key])">
              <span v-for="tag in row[column.key]" :key="tag"
                class="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs max-md:flex max-md:flex-col max-md:mt-1  font-semibold mr-1">
                {{ tag }}
              </span>
            </template>

            <!-- Action -->
            <template v-else-if="column.key === 'action'">
              <div class="divide-x divide-gray-300">
                <button class="px-4 md:py-1 hover:text-green-500 hover:rounded">Invite - {{ row.name }}</button>
                <button class="px-4 md:py-1 hover:text-red-500 hover:rounded">Delete</button>
                <button class="px-4 md:py-1 hover:text-blue-500 hover:rounded">More actions</button>
              </div>
            </template>

            <!-- Name -->
            <template v-else>
              <div class="rounded-lg border-gray-300 p-2 text-gray-700">
                {{ row[column.key] || 'No data' }}
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Array,
  columns: Array,
});
</script>
