import mockAdapters from '../mockAdapters'

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
  }
}

function init() {
  mockAdapters.noAuth.onPost('/login').reply(() => [200, data.token])
}

export default { init }
