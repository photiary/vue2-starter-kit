import axiosInstances from '@/axios/axiosInstances'

/**
 * 신규 계정을 등록한다.
 *
 * Mock 파일: /mock/data/accountData.js > basicAuthClient.onPost('/account/register')
 * @param {Object} reqBody 계정 정보
 * @returns {Object} 인증 토큰
 */
function register(reqBody) {
  console.log('accountApi.register reqBody:', reqBody)
  return axiosInstances.basicAuthClient.post('/account/register', reqBody)
}

/**
 * 자신의 계정 정보를 조회한다.
 *
 * Mock 파일(/mock/data/accountData.js > bearerTokenClient.onGet('/account'))
 * @returns {Object} 계정 정보
 */
function fetchAccount() {
  return axiosInstances.bearerTokenClient.get('/account')
}

export default { register, fetchAccount }
