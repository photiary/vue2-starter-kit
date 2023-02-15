import AxiosMockAdapter from 'axios-mock-adapter'

import axiosInstances from '@/axios/axiosInstances'

function createSimpleMock(axios) {
  return new AxiosMockAdapter(axios, { delayResponse: 2000 })
}

let basicAuth = null
let bearerToken = null
if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  basicAuth = createSimpleMock(axiosInstances.basicAuth)
  bearerToken = createSimpleMock(axiosInstances.bearerToken)
}

export default { basicAuth, bearerToken }
