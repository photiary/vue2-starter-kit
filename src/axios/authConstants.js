/**
 * Axios에서 사용하는 인증정보
 */
const AXIOS_BASIC_CONFIG = {
  username: process.env.VUE_APP_OAUTH_CLIENT_ID,
  password: process.env.VUE_APP_OAUTH_CLIENT_SECRET
}

export default { AXIOS_BASIC_CONFIG }
