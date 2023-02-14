import axiosInstances from '../axiosInstances'

/**
 * 자신의 계정정보를 조회한다.
 *
 * Mock 파일(/mock/data/accountData.js > bearerToken.onGet('/account'))
 * @returns {Object} 로그인 성공할 경우 인증 토큰을 응답
 */
function fetchAccount() {
  return axiosInstances.bearerToken.get('/account')
}

export default { fetchAccount }
