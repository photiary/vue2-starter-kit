import Vue from 'vue'
import VueRouter from 'vue-router'

// routes
import auth from './routes/auth'
import home from './routes/home'

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
