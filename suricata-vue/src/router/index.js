import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('../views/ProductosView.vue'),
      props: {
          detalles: {
              nombre: "Desayunos",
              precio: "$2000",
              descripcion: "Contamos con desayunos nutritivos y deliciosos",
              cantidad: "Para dos personas",
          }
      }
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactoView.vue')
    },
    
  ]
})

export default router
