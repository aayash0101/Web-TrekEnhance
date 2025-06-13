import { createRouter, createWebHistory } from 'vue-router'
import SignInView from '@/views/auth/SignInView.vue'
import SignUpView from '@/views/auth/SignUpView.vue'

// Simple route definitions
const routes = [
  {
    path: '/',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router