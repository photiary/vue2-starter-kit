import axiosInstances from '../axiosInstances'

/**
 * 로그인을 진행한다.
 *
 * Mock 파일(/mock/data/authData.js > simple.onGet('/login'))
 * @returns {Object} 로그인 성공할 경우 인증 토큰을 응답
 */
function login() {
  return axiosInstances.simple.get('/login')
}

export default { login }
