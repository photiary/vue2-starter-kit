import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'

// routes
import authRoute from './routes/authRoute'
import homeRoute from './routes/homeRoute'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'home' } },
  ...authRoute,
  ...homeRoute,
  {
    path: '*',
    redirect: 'error-404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

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
