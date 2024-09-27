<template>
  <div class="min-h-screen bg-gradient-to-r from-blue-400 to-purple-600 flex items-center justify-center">
    <div class="grid gap-10 md:grid-cols-2">
      <!-- Table Link -->
      <router-link to="/table" class="group">
        <h1 class="text-4xl font-bold bg-white bg-opacity-20 text-white py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:bg-opacity-30 transition-all duration-300 ease-out">
          Table
          <span class="block h-1 bg-gradient-to-r from-pink-500 to-yellow-500 group-hover:w-full w-0 transition-all duration-500"></span>
        </h1>
      </router-link>

      <!-- Tree Link -->
      <router-link to="/tree" class="group">
        <h1 class="text-4xl font-bold bg-white bg-opacity-20 text-white py-4 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:bg-opacity-30 transition-all duration-300 ease-out">
          Tree
          <span class="block h-1 bg-gradient-to-r from-green-500 to-blue-500 group-hover:w-full w-0 transition-all duration-500"></span>
        </h1>
      </router-link>
    </div>
  </div>
</template>
