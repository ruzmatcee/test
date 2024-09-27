<template>
  <section>
    <div class="bg-gray-50 p-4 rounded">
      <ul class="space-y-1">
        <li v-for="(node, index) in treeData" :key="index">
          <div
            @click="toggleCollapse(index)"
            class="flex items-center p-2 rounded transition duration-300 ease-in-out cursor-pointer hover:bg-gray-200"
            :class="{
              'bg-blue-100 text-blue-600': activeIndex === index,
              'text-gray-800': activeIndex !== index
            }"
          >
            <span v-if="node.children && node.children.length" class="mr-1">
              <i
                class="fa-solid"
                :class="isCollapsed(index) ? 'fa-caret-right' : 'fa-caret-down'"
              ></i>
            </span>
            <span class="font-medium">{{ node.name }}</span>
          </div>
          <Tree v-if="node.children && node.children.length && !isCollapsed(index)" :treeData="node.children" class="ml-2" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  treeData: {
    type: Array,
    required: true,
  },
});

const collapsed = ref([]);
const activeIndex = ref(null);

const isCollapsed = (index) => collapsed.value[index] ??= true;

const toggleCollapse = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
  collapsed.value[index] = !collapsed.value[index];
};
</script>


