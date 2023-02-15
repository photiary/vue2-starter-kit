import Axios from 'axios'
import store from '@/store/index'
import authConstants from './authConstants'
import errorHandlers from '@/axios/errorHandlers'

/**
 * 참조 사이트: https://axios-http.com/kr/docs/instance
 */
function createSimpleInstance() {
  const axios = Axios.create({
    baseURL: process.env.VUE_APP_URL_SERVICE
  })
  axios.defaults.headers.get['Accept'] = 'application/json, '
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  return axios
}

/**
 * 참조 사이트: https://axios-http.com/kr/docs/interceptors
 */
function addAuthInterceptor(axios, isBasicAuth) {
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axiosInstances.addAuthInterceptor isBasicAuth:', isBasicAuth)
      if (isBasicAuth) {
        config.auth = authConstants.AXIOS_BASIC_CONFIG
      } else {
        config.headers.Authorization = `Bearer ${store.getters['authModule/accessToken']}`
      }
      return config
    },
    function (error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )

  // 응답 인터셉터 추가하기
  axios.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      if (isBasicAuth) {
        errorHandlers.basicAuthUnauthorizedErrorHandler(error)
      } else {
        errorHandlers.bearerTokenUnauthorizedErrorHandler(error)
      }
      return Promise.reject(error)
    }
  )
  return axios
}

function createBasicAuthInstance() {
  const axios = createSimpleInstance()
  return addAuthInterceptor(axios, true)
}

function createBearerTokenInstance() {
  const axios = createSimpleInstance()
  return addAuthInterceptor(axios, false)
}

const basicAuth = createBasicAuthInstance()
const bearerToken = createBearerTokenInstance()

export default { basicAuth, bearerToken }
