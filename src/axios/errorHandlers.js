import store from '@/store/index'

/**
 * Basic 인증 에러 핸들러
 *
 * @param {Object} error Http 응답 에러
 */
function basicAuthUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // TODO 인증 실패 처리
  }
}

function bearerTokenUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // 에러 처리
    if (error.response.data.errorCode === '0002') {
      // TODO 리프레쉬 토큰
    } else {
      store.dispatch('authModule/logout')
    }
  }
}

export default {
  basicAuthUnauthorizedErrorHandler,
  bearerTokenUnauthorizedErrorHandler
}
