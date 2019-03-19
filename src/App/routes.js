import { lazy } from 'react'

export default [
  {
    component: lazy(() => import('../components/Layout')),
    path: '/auth'
  },
  {
    component: lazy(() => import('../components/HeaderLayout')),
    path: '/'
  }
]
