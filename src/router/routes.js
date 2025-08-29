const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        props: () => ({ contentFile: 'index.md' }),
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `${route.params.page}.md` }),
      },
      {
        path: '/modification_function/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `modification_function/${route.params.page}.md` }),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
