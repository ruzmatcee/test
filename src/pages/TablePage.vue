<template>
    <div class="grid place-items-center h-screen bg-slate-300">
      <Table :data="tableData" :columns="columns" />
    </div>
  </template>
  
  <script setup>
  import Table from '@/components/Table.vue';
  
  const tableData = [
    { name: 'John Doe', age: 28, address: 'New York', tags: ['Developer', 'JavaScript'], action: '' },
    { name: 'Jane Smith', age: 32, address: 'Amsterdam', tags: ['Designer', 'UI/UX'], action: '' },
    { name: 'Alice Johnson', age: 24, address: 'London', tags: ['Manager'], action: '' },
  ];
  
  const columns = [
    { key: 'name', label: 'Name', placeholder: 'Enter name' },
    { key: 'age', label: 'Age', placeholder: 'Enter age' },
    { key: 'address', label: 'Address', placeholder: 'Enter address' },
    { key: 'tags', label: 'Tags' }, // No placeholder for tags
    { key: 'action', label: 'Action' } // No placeholder for action
  ];
  </script>
  