import AxiosMockAdapter from 'axios-mock-adapter'

import axiosInstances from '@/axios/axiosInstances'

function createSimpleMock(axios) {
  return new AxiosMockAdapter(axios, { delayResponse: 2000 })
}

let noAuth = null
let basicAuth = null
let bearerToken = null
if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  noAuth = createSimpleMock(axiosInstances.noAuth)
  basicAuth = createSimpleMock(axiosInstances.basicAuth)
  bearerToken = createSimpleMock(axiosInstances.bearerToken)
}

export default { noAuth, basicAuth, bearerToken }
