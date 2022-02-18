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
      metaTags: [
        {
          name: 'description',
          content: 'Pricing - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Pricing - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Pricing - Retro Board'
        },
      ],
    },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('@/views/site/Terms'),
    meta: {
      isPublic: true,
      title: "Terms - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Terms - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Terms - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Terms - Retro Board'
        },
      ],
    },
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/site/Privacy'),
    meta: {
      isPublic: true,
      title: "Privacy - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Privacy - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Privacy - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Privacy - Retro Board'
        },
      ],
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/site/About'),
    meta: {
      isPublic: true,
      title: "About - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'About - Retro Board'
        },
        {
          property: 'og:description',
          content: 'About - Retro Board'
        },
        {
          property: 'og:title',
          content: 'About - Retro Board'
        },
      ],
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/site/Contact'),
    meta: {
      isPublic: true,
      title: "Contact - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Contact - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Contact - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Contact - Retro Board'
        },
      ],
    },
  },
  {
    path: "/company",
    name: "CompanyInfo",
    meta: {
      requiresAuth: true,
      title: "Company - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Company - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Company - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Company - Retro Board'
        },
      ],
    },
    component: () => import('@/views/company/Company'),
  },
  {
    path: '/company/create',
    name: 'CreateCompany',
    meta: {
      requiresAuth: true,
      title: "Create Company - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Create Company - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Create Company - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Create Company - Retro Board'
        },
      ],
    },
    component: () => import('@/views/company/Create'),
  },
  {
    path: '/board/:board_id',
    name: 'TeamBoard',
    component: Board,
    meta: {
      requiresAuth: false,
      isPublic: true,
      title: store.state.board.name + " - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: store.state.board.name + " - Retro Board"
        },
        {
          property: 'og:description',
          content: store.state.board.name + " - Retro Board"
        },
        {
          property: 'og:title',
          content: store.state.board.name + " - Retro Board"
        },
      ],
    },
  },
  {
    path: '/board/:board_id/setup',
    name: 'BoardSetup',
    meta: {
      requiresAuth: true,
      title: store.state.board.name + " Setup - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: store.state.board.name + " Setup - Retro Board"
        },
        {
          property: 'og:description',
          content: store.state.board.name + " Setup - Retro Board"
        },
        {
          property: 'og:title',
          content: store.state.board.name + " Setup - Retro Board"
        },
      ],
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
      metaTags: [
        {
          name: 'description',
          content: store.state.board.name + " Leader - Retro Board"
        },
        {
          property: 'og:description',
          content: store.state.board.name + " Leader - Retro Board"
        },
        {
          property: 'og:title',
          content: store.state.board.name + " Leader - Retro Board"
        },
      ],
    },
  },
  {
    path: '/board',
    name: 'DefaultBoard',
    component: BoardList,
    meta: {
      requiresAuth: true,
      title: "Board - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Board - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Board - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Board - Retro Board'
        },
      ],
    },
  },
  {
    path: '/board/create',
    name: 'BoardCreate',
    Component: BoardSetup,
    meta: {
      requiresAuth: true,
      title: "Create Board - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Create Board - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Create Board - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Create Board - Retro Board'
        },
      ],
    },
  },
  {
    path: '/boards',
    name: 'BoardList',
    component: BoardList,
    meta: {
      backendRedirected: true,
      requiresAuth: true,
      title: "Boards - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Boards - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Boards - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Boards - Retro Board'
        },
      ],
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('@/views/user/User'),
    meta: {
      requiresAuth: true,
      title: "User - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'User - Retro Board'
        },
        {
          property: 'og:description',
          content: 'User - Retro Board'
        },
        {
          property: 'og:title',
          content: 'User - Retro Board'
        },
      ],
    },
  },
  {
    path: '/user/callback',
    name: 'UserCallback',
    component: () => import('@/views/user/Callback'),
    meta: {
      backendRedirected: true,
      title: "User Callback - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'User Callback - Retro Board'
        },
        {
          property: 'og:description',
          content: 'User Callback - Retro Board'
        },
        {
          property: 'og:title',
          content: 'User Callback - Retro Board'
        },
      ],
    },
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/site/NotFound'),
    meta: {
      title: "Not Found - Retro Board",
      metaTags: [
        {
          name: 'description',
          content: 'Not Found - Retro Board'
        },
        {
          property: 'og:description',
          content: 'Not Found - Retro Board'
        },
        {
          property: 'og:title',
          content: 'Not Found - Retro Board'
        },
      ],
    },
  },
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
