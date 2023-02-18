import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

// 참조 링크: https://vee-validate.logaretm.com/v3/#usage
extend('required', {
  ...required,
  message: field => {
    // ValidationProvider의 name prop
    return `${field}는 필수입니다.`
  }
})
