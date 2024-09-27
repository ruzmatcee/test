<template>
    <div class="grid place-items-center h-screen bg-slate-300">
        <Tree :treeData="tree" />
    </div>
</template>

<script setup>
import Tree from '@/components/Tree.vue';

const tree = [
    {
        name: 'Models',
        children: [
            {
                name: 'Data warehouse',
                children: [
                    { name: 'Report samples' },
                    { name: 'Sales performance' },
                ],
            },
        ],
    },
    {
        name: 'Statistics',
        children: [
            { name: 'None' },
            { name: 'None' },
        ],
    },
];
</script>