import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

// routes
import authRoute from '@/router/routes/authRoute'
import homeRoute from '@/router/routes/homeRoute'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'home' } },
  ...authRoute,
  ...homeRoute,
  {
    path: '*',
    redirect: () => {
      // TODO localStorage 등에서 로그인 정보를 제거하나.
      return { name: 'login' }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

// 참조 링크: https://v3.router.vuejs.org/guide/advanced/meta.html
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.anonymous)) {
    next()
  } else {
    const isLogin = store.getters['authModule/isLogin']
    if (isLogin) {
      next()
    } else {
      next({ name: 'login' })
    }
  }
})

export default router
