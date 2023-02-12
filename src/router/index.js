import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import home from './routes/home'
import auth from './routes/auth'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: { name: 'home' } },
  ...auth,
  ...home,
  {
    path: '*',
    redirect: 'error-404'
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
