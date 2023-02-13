import Vue from 'vue'
import VueRouter from 'vue-router'

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

export default new VueRouter({
  mode: 'history',
  routes
})
