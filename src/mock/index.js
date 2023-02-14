// Mock data
import authData from './data/authData'
import accountData from './data/accountData'

if (JSON.parse(process.env.VUE_APP_USE_MOCK)) {
  const dataList = [authData, accountData]
  dataList.forEach(data => data.init())
}
