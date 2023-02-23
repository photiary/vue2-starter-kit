import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

// modules
import authModule from '@/store/modules/authModule'

Vue.use(Vuex)

// localStorage는 웹 브라우저를 닫았다 열어도 데이터가 남아있기 때문에,
// PC와 같은 환경에서는 sessionStorage 사용을 검토한다.
// Web storage 참조 링크: https://developer.mozilla.org/ko/docs/Web/API/Web_Storage_API
const vuexLocal = new VuexPersistence({
  key: 'vuex',
  storage: window.localStorage,
  reducer: state => ({
    // 새로고침 후, 유지하고 싶은 state만 저장
    authModule: state.authModule
  })
})

export default new Vuex.Store({
  state: {},
  modules: { authModule },
  plugins: [vuexLocal.plugin]
})
