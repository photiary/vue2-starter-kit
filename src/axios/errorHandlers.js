import store from '@/store/index'
import { API_ERROR_0002 } from '@/axios/errorConstants'

/**
 * Basic Auth 에러 핸들러
 *
 * @param {Object} error Http 응답 에러
 */
function basicAuthUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // 공통 인증 실패 처리
    console.log('errorHandler.basicAuthUnauthorizedErrorHandler error:', error)
  }
}

/**
 * Bearer Token 에러 핸들러
 *
 * 인증 에러에 따라 토큰 재발급과 로그 아웃을 진행한다.
 *
 * @param {Object} error Http 응답 에러
 */
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
