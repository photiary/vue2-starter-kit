// Mock data
import auth from './data/auth'

const dataList = [auth]

if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  dataList.forEach(data => data.init())
}
