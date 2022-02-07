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
    path: '/board/:board_team',
    name: 'TeamBoard',
    component: Board,
    children: [
      {
        path: 'setup',
        name: 'Board Setup',
        component: BoardSetup,
      },
      {
        path: 'leader',
        name: 'Board Leader',
        component: Leader,
      },
    ],
  },
  {
    path: '/board',
    name: 'Default Board',
    component: BoardList,
    children: [
      {
        path: 'setup',
        name: 'Board Setup',
        Component: BoardSetup,
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
