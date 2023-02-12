import mockAdapters from '../mockAdapters'

const data = {
  token: {
    token: 'asdf'
  }
}

function init() {
  mockAdapters.simple.onGet('/login').reply(() => [200, data.token])
}

export default { init }
