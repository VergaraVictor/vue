const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/indexPage.vue') },
      { path: 'Typography', name: 'typography', component: () => import('src/pages/Typography.vue') },
      { path: 'flex', name: 'flex', component: () => import('src/pages/Flex.vue') },
      { path: 'dialogs', name: 'dialogs', component: () => import('src/pages/Dialogs.vue') },
      { path: 'forms', name: 'forms', component: () => import('src/pages/Forms.vue') },
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
