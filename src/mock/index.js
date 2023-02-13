// Mock data
import authData from './data/authData'

const dataList = [authData]

if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  dataList.forEach(data => data.init())
}
