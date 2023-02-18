/** 숫자, 소문자, 대문자, 특수문자 조합으로 8자 이상 */
const REG_EXP_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()]).{8,}/

function validatePassword(value) {
  console.log('validator.validatePassword value:', value)
  return REG_EXP_PASSWORD.test(value)
}

export default { REG_EXP_PASSWORD, validatePassword }
