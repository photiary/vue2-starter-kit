import mockAdapters from '../mockAdapters'
import { errorData } from './errorData'

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
    name: '더미',
    gender: 'M',
    mobile: '01012345678'
  }
}

function init() {
  mockAdapters.basicAuth.onPost('/account/register').reply(config => {
    const reqBody = JSON.parse(config.data)
    if (
      reqBody.id === null ||
      reqBody.name === null ||
      reqBody.password === null
    ) {
      return [400, errorData.error1002]
    } else {
      return [200, data.token]
    }
  })
  mockAdapters.bearerToken.onGet('/account').reply(config => {
    console.log('accountData.account config:', config)
    return [200, data.account]
  })
}

export default { init }
