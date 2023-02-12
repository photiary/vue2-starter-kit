import AxiosMockAdapter from 'axios-mock-adapter'

function run(axios) {
  const mock = new AxiosMockAdapter(axios)
  mock.onGet('/login').reply(200, {
    token: '74349473'
  })
}

export default { run }
