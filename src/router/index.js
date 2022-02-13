import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Board from "@/views/board/Board";
import BoardSetup from '@/views/board/Setup';
import BoardList from '@/views/board/List';

import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      isPublic: true
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/site/Pricing'),
    meta: {
      isPublic: true
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/site/Terms'),
    meta: {
      isPublic: true
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/site/Privacy'),
    meta: {
      isPublic: true
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/site/About'),
    meta: {
      isPublic: true
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/site/Contact'),
    meta: {
      isPublic: true
    },
  },
  {
    path: '/company/create',
    name: 'CreateCompany',
    meta: {
      backendRedirected: true,
    },
    component: () => import('@/views/company/Create'),
  },
  {
    path: '/board/:board_team',
    name: 'TeamBoard',
    component: Board,
    meta: {
      requiresAuth: false,
      isPublic: true,
    },
  },
  {
    path: '/board/:board_team/setup',
    name: 'BoardSetup',
    meta: {
      requiresAuth: true,
    },
    component: BoardSetup,
  },
  {
    path: '/board/:board_team/leader',
    name: 'BoardLeader',
    component: () => import('@/views/board/Leader'),
  },
  {
    path: '/board',
    name: 'DefaultBoard',
    component: BoardList,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: 'create',
        name: 'BoardCreate',
        Component: BoardSetup,
      }
    ]
  },
  {
    path: '/boards',
    name: 'BoardList',
    component: BoardList,
    meta: {
      backendRedirected: true,
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/User'),
  },
  {
    path: '/user/callback',
    name: 'UserCallback',
    component: () => import('@/views/user/Callback'),
    meta: {
      backendRedirected: true,
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({
      name: 'Home',
    })
  } else if (to.meta.backendRedirected && !store.state.user.token) {
    next();
  } else {
    next()
  }
})

export default router
