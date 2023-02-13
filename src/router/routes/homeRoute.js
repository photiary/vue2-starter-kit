export default [
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ '@/views/pages/Home.vue')
  }
]
