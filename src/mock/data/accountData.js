import mockAdapters from '../mockAdapters'

const data = {
  account: {
    id: 1234,
    name: '더미',
    gender: 'M',
    mobile: '01012345678'
  }
}

function init() {
  mockAdapters.bearerToken.onGet('/account').reply(() => [200, data.account])
}

export default { init }
