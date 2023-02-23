import Vue from 'vue'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import isToday from 'dayjs/plugin/isToday'
import localeKo from 'dayjs/locale/ko'

dayjs.extend(localizedFormat)
dayjs.extend(isToday)
dayjs.locale(localeKo)
Vue.prototype.$dayjs = dayjs
