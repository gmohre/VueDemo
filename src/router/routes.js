
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { name: 'buildingIndex', path: '', component: () => import('pages/BuildingIndex.vue') },
      {
        name: 'floorDetail',
        path: '/floor/:floorId/detail',
        component: () => import('components/Floor.vue'),
        props: (route) => ({ floorId: Number.parseInt(route.params.floorId, 10) })
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
