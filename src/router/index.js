import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/views/Home';
import Board from "@/views/board/Board";
import BoardSetup from '@/views/board/Setup';
import Leader from "@/views/board/Leader";
import BoardList from '@/views/board/List';
import CreateCompany from "@/views/company/Create";
import Pricing from '@/views/site/Pricing';
import About from '@/views/site/About';
import Contact from "@/views/site/Contact";
import Privacy from "@/views/site/Privacy";
import Terms from "@/views/site/Terms";

import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      isPublic: true
    },
    component: Home,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    meta: {
      isPublic: true
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms,
    meta: {
      isPublic: true
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      isPublic: true
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      isPublic: true
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      isPublic: true
    },
  },
  {
    path: '/company/create',
    name: 'CreateCompany',
    meta: {
      requiresAuth: true,
    },
    component: CreateCompany,
  },
  {
    path: '/board/:board_team',
    name: 'TeamBoard',
    component: Board,
    meta: {
      requiresAuth: false,
      isPublic: true,
    },
    children: [
      {
        path: 'setup',
        name: 'BoardSetup',
        component: BoardSetup,
      },
      {
        path: 'leader',
        name: 'BoardLeader',
        component: Leader,
      },
    ],
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
      requiresAuth: true,
    },
  },
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
  } else {
    next()
  }
})

export default router
