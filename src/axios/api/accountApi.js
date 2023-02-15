import axiosInstances from '../axiosInstances'

/**
 * 자신의 계정 정보를 조회한다.
 *
 * Mock 파일(/mock/data/accountData.js > bearerToken.onGet('/account'))
 * @returns {Object} 계정 정보
 */
function fetchAccount() {
  return axiosInstances.bearerToken.get('/account')
}

export default { fetchAccount }
