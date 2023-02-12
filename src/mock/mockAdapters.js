import AxiosMockAdapter from 'axios-mock-adapter'

import axiosInstances from '@/api/common/axiosInstances'

function createSimpleMock(axios) {
  return new AxiosMockAdapter(axios, { delayResponse: 2000 })
}

const simple = createSimpleMock(axiosInstances.simple)

export default { simple }
