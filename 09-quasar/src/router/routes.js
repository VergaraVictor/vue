const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/indexPage.vue') },
      { path: 'Typography', name: 'typography', component: () => import('src/pages/Typography.vue') },
      { path: 'flex', name: 'flex', component: () => import('src/pages/Flex.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
