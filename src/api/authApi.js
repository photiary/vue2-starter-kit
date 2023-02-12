import axiosInstances from './common/axiosInstances'

function login() {
  const response = axiosInstances.simple.get('/login')
  console.log('authApi.login response:', response)
  return response
}

export default { login }
