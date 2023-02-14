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
    accessToken(state) {
      return state.token?.access_token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {}
}
