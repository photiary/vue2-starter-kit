import mockAdapters from '@/mock/mockAdapters'
import { errorData } from '@/mock/data/errorData'

const data = {
  token: {
    access_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.dummy-token.dummy-signature',
    token_type: 'bearer',
    refresh_token:
      'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.dummy-refresh_token.dummy-signature',
    expires_in: 35999,
    scope: 'phr.read phr.write',
    aud: '사용처',
    sub: 'dummy',
    iss: '발급처',
    name: '더미',
    jti: '64207ec3-5a51-4f2c-bed4-3eb4833301f5'
  },
  account: {
    id: 'dummy',
    password: 'Dummy12!@',
    name: '더미',
    gender: 'M',
    mobile: '01012345678'
  }
}

function init() {
  mockAdapters.basicAuthClient.onPost('/login').reply(config => {
    console.log('authData.login config:', config)
    const reqBody = JSON.parse(config.data)
    if (
      data.account.id === reqBody.id &&
      data.account.password === reqBody.password
    ) {
      return [200, data.token]
    } else {
      return [401, errorData.error0001]
    }
  })
}

export default { init }
