<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
    <div class="max-w-md w-full text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
        <Map class="w-8 h-8 text-white"/>
      </div>
      <h1 class="text-6xl font-bold text-gray-900">404</h1>
      <p class="text-xl text-gray-600 mt-2">Trail not found</p>
      <p class="text-gray-500 mt-4">The path you're looking for doesn't exist or has been moved.</p>
      
      <div class="mt-8">
        <router-link 
          to="/" 
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <ArrowLeft class="mr-2 h-5 w-5" />
          Back to main trail
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Map, ArrowLeft } from 'lucide-vue-next'
</script>