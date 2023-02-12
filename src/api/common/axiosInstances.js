/*
 * 참조 사이트: https://axios-http.com/kr/docs/instance
 */
import Axios from 'axios'

import axiosInterceptors from './axiosInterceptors'

function createSimpleInstance(url) {
  const instance = Axios.create({
    baseURL: `${process.env.VUE_APP_URL_SERVICE}${url}`
  })

  return axiosInterceptors.addSimpleInterceptor(instance)
}

const simple = createSimpleInstance('/')

export default { simple }
