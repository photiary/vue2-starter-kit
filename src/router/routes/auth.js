export default [
  {
    path: '/login',
    name: 'login',
    meta: { anonymous: true },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/pages/auth/Login.vue')
  }
]
