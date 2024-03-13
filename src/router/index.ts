import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import BlogView from '@/views/BlogView.vue'

import ConvidadoComponente from '@/components/Blog/ConvidadoComponente.vue'
import UsuarioComponente from '@/components/Blog/UsuarioComponente.vue'
import AdministradorComponente from '@/components/Blog/AdministradorComponente.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/blog',
    name: 'blogPrincipal',
    component: BlogView
  },
  {
    path: '/convidado',
    name: 'AcessoConvidado',
    component: ConvidadoComponente
  },
  {
    path: '/usuario',
    name: 'AcessoUsuario',
    component: UsuarioComponente
  },
  {
    path: '/administrador',
    name: 'AcessoAdministrador',
    component: AdministradorComponente
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
