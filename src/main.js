import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// 3rd party 플러그인
import './plugins/dayjs'

// Axios Mock Adapter
import '@/mock/index'

// Validation rules
import '@/utils/validations/validations'

// 데이터 표시 형식
// Vue3에서는 Filters를 제공하지 않게 된다. Vue3로 마이그레이션할 경우는 다음 링크를 참조한다.
// https://v3-migration.vuejs.org/breaking-changes/filters.html#global-filters
import './utils/filters'

Vue.config.productionTip = false

// 운영환경에서 console.log 표시되지 않도록 한다.
if (process.env.NODE_ENV === 'production') {
  console.log = function () {}
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
