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
        path: '/release/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `release/${route.params.page}.md` }),
      },
      {
        path: '/modification_function/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `modification_function/${route.params.page}.md` }),
      },
      {
        path: '/installation/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `installation/${route.params.page}.md` }),
      },
      {
        path: '/themes/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `themes/${route.params.page}.md` }),
      },
      {
        path: '/systems/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `systems/${route.params.page}.md` }),
      },
      {
        path: '/devices/:page',
        component: () => import('pages/IndexPage.vue'),
        props: (route) => ({ contentFile: `devices/${route.params.page}.md` }),
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
