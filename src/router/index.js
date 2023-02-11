import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import home from './routes/home'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'home' } },
  ...home,
  {
    path: '*',
    redirect: 'error-404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
