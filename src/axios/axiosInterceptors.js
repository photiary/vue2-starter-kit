/*
 * 참조 사이트: https://axios-http.com/kr/docs/interceptors
 */

function addSimpleInterceptor(axios) {
  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    function (config) {
      console.log('axios.interceptors.request', config)
      // 요청이 전달되기 전에 작업 수행
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

export default {
  addSimpleInterceptor
}
