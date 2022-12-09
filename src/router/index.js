import VueRouter from 'vue-router'

const routes = [
  {
    path: '/tasks',
    name:'/tasks',
    component: () => import('../components/TaskPanel.vue'),
  },
 
  {
    path: '/admin',
    name:'/admin',
    component: () => import('../components/header/AdminPanel/AdminPanel.vue'),
  },

  {
    path: '/login',
    name:'/login',
    component: () => import('../components/LoginModal.vue'),
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



