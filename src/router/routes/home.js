export default [
  {
    path: '/home',
    name: 'home',
    meta: { anonymous: true },
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/pages/Home.vue')
  }
]
