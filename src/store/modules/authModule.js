const getDefaultState = () => {
  return {
    token: null
  }
}

export default {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    isLogin(state) {
      return state.token !== null
    },
    accessToken(state, getters) {
      return getters.isLogin ? state.token.access_token : null
    }
  },
  // Async, Dispatch, Backend API
  actions: {
    logout({ commit }) {
      commit('INIT_STATE')
    }
  },
  // Sync, Commit
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    },
    INIT_STATE(state) {
      Object.assign(state, getDefaultState())
    }
  }
}
