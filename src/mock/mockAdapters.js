import AxiosMockAdapter from 'axios-mock-adapter'

import axiosInstances from '@/axios/axiosInstances'

function createSimpleMock(axios) {
  return new AxiosMockAdapter(axios, { delayResponse: 2000 })
}

let basicAuthClient = null
let bearerTokenClient = null
if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  basicAuthClient = createSimpleMock(axiosInstances.basicAuthClient)
  bearerTokenClient = createSimpleMock(axiosInstances.bearerTokenClient)
}

export default { basicAuthClient, bearerTokenClient }
