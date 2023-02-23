import Vue from 'vue'
import dayjs from 'dayjs'

// 참조 링크: https://v2.vuejs.org/v2/guide/filters.html

/**
 * Date를 "YYYY.MM.DD"로 변환한다. Date가 없으면 "----.--.--"로 반환한다.
 * @param {Date} date 날짜 객체
 * @returns {string} 형식이 지정된 날짜
 */
const simpleDate = date => {
  if (date) {
    return dayjs(date).format('YYYY.MM.DD')
  }
  return '----.--.--'
}
// 선언한 함수를 Vue 전역에 지정한다.
Vue.filter('simpleDate', simpleDate)
