import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home';
import Board from "@/views/Board";
import Leader from "@/views/Leader";
import CreateCompany from "@/views/company/Create";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/company/create',
    name: 'Create Company',
    component: CreateCompany,
  },
  {
    path: '/board/:id/leader',
    name: 'Board Leaders',
    component: Leader,
  },
  {
    path: '/board/:id',
    name: 'Specific Board',
    component: Board,
  },
  {
    path: '/board',
    name: 'Default Board',
    component: Board,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
