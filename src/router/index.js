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
      isPublic: true,
      title: "Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Retro Board'
        },
        {
          property: 'og:description',
          content: 'Retro Board'
        },
        {
          property: 'og:title',
          content: 'Retro Board'
        },
      ],
    },
    component: () => import('@/views/Home')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/site/Pricing'),
    meta: {
      isPublic: true,
      title: "Pricing - Retro Board",
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/site/Terms'),
    meta: {
      isPublic: true,
      title: "Terms - Retro Board",
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/site/Privacy'),
    meta: {
      isPublic: true,
      title: "Privacy - Retro Board",
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/site/About'),
    meta: {
      isPublic: true,
      title: "About - Retro Board",
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/site/Contact'),
    meta: {
      isPublic: true,
      title: "Contact - Retro Board",
    },
  },
  {
    path: '/company/create',
    name: 'CreateCompany',
    meta: {
      backendRedirected: true,
      title: "Create Company - Retro Board",
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
      title: store.state.board.name + " - Retro Board",
    },
  },
  {
    path: '/board/:board_team/setup',
    name: 'BoardSetup',
    meta: {
      requiresAuth: true,
      title: store.state.board.name + " Setup - Retro Board",
    },
    component: BoardSetup,
  },
  {
    path: '/board/:board_team/leader',
    name: 'BoardLeader',
    component: () => import('@/views/board/Leader'),
    meta: {
      requiresAuth: true,
      title: store.state.board.name + " Leader - Retro Board",
    },
  },
  {
    path: '/board',
    name: 'DefaultBoard',
    component: BoardList,
    meta: {
      requiresAuth: true,
      title: "Board - Retro Board",
    },
    children: [
      {
        path: 'create',
        name: 'BoardCreate',
        Component: BoardSetup,
        meta: {
          requiresAuth: true,
          title: "Create Board - Retro Board",
        },
      }
    ]
  },
  {
    path: '/boards',
    name: 'BoardList',
    component: BoardList,
    meta: {
      backendRedirected: true,
      requiresAuth: true,
      title: "Boards - Retro Board",
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/User'),
    meta: {
      requiresAuth: true,
      title: "User - Retro Board",
    },
  },
  {
    path: '/user/callback',
    name: 'UserCallback',
    component: () => import('@/views/user/Callback'),
    meta: {
      backendRedirected: true,
      title: "User Callback - Retro Board",
    },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  //const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  } else {
    document.title = previousNearestWithMeta.meta.title
  }
  // nearestWithMeta.meta.tags.map(tagDef => {
  //   const tag = document.createElement('meta')
  //   Object.keys(tagDef).forEach(key => {
  //     tag.setAttribute(key, tagDef[key])
  //   })
  //   return tag
  // }).forEach(tag => document.head.appendChild(tag))

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
