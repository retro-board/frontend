import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home';

import Board from "@/views/board/Board";
import BoardSetup from '@/views/board/Setup';
import Leader from "@/views/board/Leader";
import BoardList from '@/views/board/List';

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
    path: '/board/setup',
    name: 'Board Setup',
    component: BoardSetup,
  },
  {
    path: '/board/setup/:id',
    name: 'Board',
    component: BoardSetup,
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
  },
  {
    path: '/boards',
    name: 'Default Board',
    component: BoardList,
  },
  {
    path: '/privacy',
    name: 'Privacy'
  },
  {
    path: '/terms',
    name: 'Terms'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/contact',
    name: 'Contact'
  },
  {
    path: '/pricing',
    name: 'Pricing'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
