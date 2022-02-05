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
    children: [
      {
        path: ':id',
        name: 'Board',
        Component: BoardSetup,
      }
    ]
  },
  {
    path: '/board',
    name: 'Default Board',
    component: Board,
    children: [
      {
        path: ':id',
        name: 'Board',
        Component: Board,
        children: [
          {
            path: 'leader',
            name: 'Leader',
            Component: Leader,
          },
        ]
      }
    ]
  },
  {
    path: '/boards',
    name: 'Default Board',
    component: BoardList,
  },
  {
    path: '/privacy',
    name: 'Privacy',
    Component: Home,
  },
  {
    path: '/terms',
    name: 'Terms',
    Component: Home,
  },
  {
    path: '/about',
    name: 'About',
    Component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    Component: Home,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    Component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
