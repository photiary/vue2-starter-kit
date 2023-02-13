/**
 * Basic 인증 에러 핸들러
 *
 * @param {Object} error Http 응답 에러
 */
function basicUnauthorizedErrorHandler(error) {
  if (error.response.status === 401) {
    // 에러 처리
  }
}

export default { basicUnauthorizedErrorHandler }
