<template>
  <div class="text-center mb-8">
    <div class="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4">
      <Mountain class="w-8 h-8 text-white" />
    </div>
    <h1 class="text-3xl font-bold text-gray-900">TrekMaster</h1>
    <p class="text-gray-600 mt-2">{{ title }}</p>
  </div>
</template>

<script setup>
import { Mountain } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    default: 'Your adventure starts here'
  }
})
</script>