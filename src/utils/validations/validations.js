import { extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import ko from 'vee-validate/dist/locale/ko.json'
import validators from '@/utils/validations/validators'

// 메시지 로컬라이징
localize('ko', ko)

// vee-validate 제공하는 기본 룰을 VueComponent에서 참조할 수 있도록 한다.
// 참조 링크: https://vee-validate.logaretm.com/v3/guide/rules.html#rules
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

// vee-validate 제공하는 기본 required 룰의 메시지를 덮어쓰기한다.
// 참조 링크: https://vee-validate.logaretm.com/v3/#usage
extend('required', {
  ...rules.required,
  message: field => {
    // ValidationProvider의 name prop
    return `${field}는 필수입니다.`
  }
})

// password 룰 추가한다.
// 참조 링크: https://vee-validate.logaretm.com/v3/guide/basics.html#messages
extend('password', {
  validate: validators.validatePassword,
  message: '숫자, 대소문자, 특수문자 조합으로 8자 이상 입력하십시오.'
})
