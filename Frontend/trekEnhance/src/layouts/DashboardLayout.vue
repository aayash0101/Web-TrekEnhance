<template>
  <div class="dashboard-layout">
    <!-- Navigation Header -->
    <header class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex-shrink-0 flex items-center">
              <router-link to="/dashboard" class="flex items-center">
                <Mountain class="h-8 w-8 text-green-600" />
                <span class="ml-2 text-xl font-bold text-gray-900">TrekMaster</span>
              </router-link>
            </div>
            
            <!-- Navigation Links -->
            <nav class="ml-6 flex space-x-8">
              <router-link 
                to="/dashboard" 
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="[$route.name === 'Dashboard' ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
              >
                Dashboard
              </router-link>
              <router-link 
                to="/dashboard/treks" 
                class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                :class="[$route.name === 'Treks' ? 'border-green-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
              >
                My Treks
              </router-link>
            </nav>
          </div>
          
          <!-- User Menu -->
          <div class="flex items-center">
            <div class="ml-3 relative">
              <div>
                <button 
                  @click="isUserMenuOpen = !isUserMenuOpen"
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <User class="h-5 w-5" />
                  </div>
                </button>
              </div>
              
              <!-- Dropdown menu -->
              <div 
                v-if="isUserMenuOpen" 
                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <router-link 
                  to="/dashboard/profile" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click="isUserMenuOpen = false"
                >
                  Your Profile
                </router-link>
                <a 
                  href="#" 
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  @click.prevent="handleLogout"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <!-- Main Content -->
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Mountain, User } from 'lucide-vue-next'

const router = useRouter()
const isUserMenuOpen = ref(false)

const handleLogout = () => {
  // Clear user data from localStorage
  localStorage.removeItem('user')
  
  // Close the dropdown
  isUserMenuOpen.value = false
  
  // Redirect to login page
  router.push('/auth/signin')
}
</script>