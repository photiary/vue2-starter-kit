import store from '@/store/index'
import { API_ERROR_0002 } from './errorConstants'

/**
 * Basic 인증 에러 핸들러
 *
 * @param {Object} error Http 응답 에러
 */
function basicAuthUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // 공통 인증 실패 처리
    console.log('errorHandler.basicAuthUnauthorizedErrorHandler error:', error)
  }
}

function bearerTokenUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    console.log(
      'errorHandler.bearerTokenUnauthorizedErrorHandler error:',
      error
    )
    // 에러 처리
    if (error.response.data.errorCode === API_ERROR_0002) {
      // TODO 리프레쉬 토큰
    } else {
      // TODO 'Promise returned from dispatch is ignored'
      store.dispatch('authModule/logout')
    }
  }
}

export default {
  basicAuthUnauthorizedErrorHandler,
  bearerTokenUnauthorizedErrorHandler
}
