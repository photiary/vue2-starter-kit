import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// Axios Mock Adapter
import '@/mock/index'

// Validation rules
import '@/utils/validations/validations'

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
