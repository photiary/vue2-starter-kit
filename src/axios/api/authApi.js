import axiosInstances from '../axiosInstances'

/**
 * 로그인을 진행한다.
 *
 * Mock 파일(/mock/data/authData.js > basicAuth.onPost('/login'))
 * @param {string} id 계정 ID
 * @param {string} password 계정 암호
 * @returns {Object} 로그인 성공할 경우 인증 토큰을 응답
 */
function login(id, password) {
  const requestBody = {
    id: id,
    password: password
  }
  return axiosInstances.basicAuth.post('/login', requestBody)
}

function logout() {
  return axiosInstances.bearerToken.post('/logout')
}

export default { login, logout }
