import store from '@/store/index'
import { API_ERROR_0002 } from '@/axios/errorConstants'

/**
 * Basic Auth 에러 핸들러
 *
 * @param {Object} error Http 응답 에러
 */
function basicAuthUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // TODO 에러 핸들러에서 처리후 API 호출하는 곳까지 error 가 반환되지 않도록 수정
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
      // TODO 리프레시 토큰을 요청하고, 3회까지 재요청을 한다.
    } else {
      // TODO 에러 핸들러에서 처리후 API 호출하는 곳까지 error 가 반환되지 않도록 수정
      // TODO 'Promise returned from dispatch is ignored'
      store.dispatch('authModule/logout')
    }
  }
}

export default {
  basicAuthUnauthorizedErrorHandler,
  bearerTokenUnauthorizedErrorHandler
}
