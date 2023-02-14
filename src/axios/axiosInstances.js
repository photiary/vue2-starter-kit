import Axios from 'axios'
import authConstants from './authConstants'

/**
 * 참조 사이트: https://axios-http.com/kr/docs/interceptors
 */
function addNoAuthInterceptor(axios) {
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axios.interceptors.request', config)
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
      console.log('axios.interceptors.response', response)
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )
  return axios
}

function addBasicAuthInterceptor(axios) {
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('axios.interceptors.request', config)
      config.auth = authConstants.AXIOS_BASIC_CONFIG
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
      console.log('axios.interceptors.response', response)
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )
  return axios
}

function addBearerTokenInterceptor(instance) {
  // 요청 인터셉터 추가하기
  instance.interceptors.request.use(
    function (config) {
      // 요청이 전달되기 전에 작업 수행
      console.log('addBearerTokenInterceptor')
      config.headers.Authorization = `Bearer token`
      return config
    },
    function (error) {
      // 요청 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )

  // 응답 인터셉터 추가하기
  instance.interceptors.response.use(
    function (response) {
      // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 데이터가 있는 작업 수행
      return response
    },
    function (error) {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
      // 응답 오류가 있는 작업 수행
      return Promise.reject(error)
    }
  )
  return instance
}

/**
 * 참조 사이트: https://axios-http.com/kr/docs/instance
 */
function createSimpleInstance() {
  const instance = Axios.create({
    baseURL: process.env.VUE_APP_URL_SERVICE
  })
  instance.defaults.headers.get['Accept'] = 'application/json, '
  instance.defaults.headers.post['Content-Type'] = 'application/json'
  return instance
}

function createNoAuthInstance() {
  const instance = createSimpleInstance()
  return addNoAuthInterceptor(instance)
}

function createBasicAuthInstance() {
  const instance = createSimpleInstance()
  return addBasicAuthInterceptor(instance)
}

function createBearerTokenInstance() {
  const instance = createSimpleInstance()
  return addBearerTokenInterceptor(instance)
}

const noAuth = createNoAuthInstance()
const basicAuth = createBasicAuthInstance()
const bearerToken = createBearerTokenInstance()

export default { noAuth, basicAuth, bearerToken }
