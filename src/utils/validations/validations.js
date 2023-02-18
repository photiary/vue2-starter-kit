import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import validators from './validators'

// vee-validate default rules에 메시지 덮어쓰기
// 참조 링크: https://vee-validate.logaretm.com/v3/#usage
extend('required', {
  ...required,
  message: field => {
    // ValidationProvider의 name prop
    return `${field}는 필수입니다.`
  }
})

// password rule 추가
// 참조 링크: https://vee-validate.logaretm.com/v3/guide/basics.html#messages
extend('password', {
  validate: validators.validatePassword,
  message: '숫자, 대소문자, 특수문자 조합으로 8자 이상 입력하십시오.'
})
