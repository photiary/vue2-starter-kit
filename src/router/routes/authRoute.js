export default [
  {
    path: '/login',
    name: 'login',
    // 인증없이 접근할 수 있는 조건
    meta: { anonymous: true },
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/pages/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: { anonymous: true },
    component: () =>
      import(/* webpackChunkName: "auth" */ '@/views/pages/auth/Register.vue')
  }
]
