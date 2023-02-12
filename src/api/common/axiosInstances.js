/*
 * 참조 사이트: https://axios-http.com/kr/docs/instance
 */
import Axios from 'axios'

import mock from '@/mock/mock'
import axiosInterceptors from './axiosInterceptors'

function createSimpleInstance(url) {
  const instance = Axios.create({
    baseURL: `${process.env.VUE_APP_URL_SERVICE}${url}`
  })

  if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
    mock.run(instance)
  }

  return axiosInterceptors.addSimpleInterceptor(instance)
}

const simple = createSimpleInstance('/')

export default { simple }
