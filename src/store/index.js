import Vue from 'vue'
import Vuex from 'vuex'

// modules
import authModule from './modules/authModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: { auth: authModule }
})
