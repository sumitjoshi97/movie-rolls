import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('../views/Auth')),
    path: '/auth',
  },
  {
    component: lazy(() => import('../views/SearchResults')),
    path: '/search-results/:searchQuery',
  },
  {
    component: lazy(() => import('../views/ItemDetail')),
    path: '/details/:itemId',
  },
  {
    component: lazy(() => import('../views/Discover')),
    path: '/discover',
  },
  {
    component: lazy(() => import('../views/Favorites')),
    path: '/profile/favorites',
  },
  {
    component: lazy(() => import('../views/WatchLaters')),
    path: '/profile/watch-later',
  },
  {
    component: lazy(() => import('../views/Home')),
    path: '/',
  },
]
