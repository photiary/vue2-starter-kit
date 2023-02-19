# vue2-starter-kit

## 🥃 목차
- [체크 리스트](#-체크-리스트)
- [프로젝트 개발 환경](#-프로젝트-개발-환경)
- [개발 가이드라인](#-개발-가이드라인)

---

## 🥡 체크 리스트
- [ ] 사용 서버, 라이브러리등 프로젝트 설계에 맞는 버전 구성
- [ ] 형상관리
- [ ] CI/CD 환경 구성 선택
- [ ] 개발(로컬, 서버), 운영 환경 분리
  - [ ] 환경변수
  - [ ] Mock 테스트 환경
  - [ ] CORS
  - [ ] Log
  - [ ] devtool
- [ ] 디렉토리 구조
- [ ] 코딩 컨벤션
- [ ] 공통 처리
  - [ ] HTTP Headers
  - [ ] API 호출
  - [ ] API 에러 핸들러
  - [ ] 입력 데이터 검증
  - [ ] 날짜 처리
  - [ ] 초기 상태, 요청 중, 완료, 실패
  - [ ] 화면 Layout
  - [ ] Dialog(대화상자) modal
  - [ ] 데이터 표시 서식(`Vue.js Filters`)
- [ ] 공용 메시지(코드) 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 공용 상수(코드) 관리
  - [ ] Front-end
  - [ ] Back-end
- [ ] 웹 스토리지(`sessionStorage` 또는 `localStorage`)

---

## 🍕 프로젝트 개발 환경
- Node.js v18.14.0
- npm 9.3.0
- Vue.js 2.7.14

  Vue.js Vue2의 LTS 지원은 2023년 12월 31일에 종료되므로 Vue 3로 업그레이드 필요하다. 참조 링크: https://v2.vuejs.org/lts/

## 🍔 프로젝트 생성
참조 링크: https://cli.vuejs.org/
```shell
# Vue CLI 설치 
npm install -g @vue/cli
vue --version

# 프로젝트 생성
vue create vue2-starter-kit
cd vue2-starter-kit
```

## 🍟 코딩 컨벤션 도구
```shell
# eslint 설치
npm install -g -d eslint
eslint --init
```
- √ How would you like to use ESLint? · problems
- √ What type of modules does your project use? · esm (JavaScript modules)
- √ Which framework does your project use? · vue
- √ Does your project use TypeScript? · No
- √ Where does your code run? · browser
- √ What format do you want your config file to be in? · JavaScript
- √ Would you like to install them now? · Yes
- √ Which package manager do you want to use? · npm

```shell
# prettier 설치
npm i @vue/eslint-config-prettier --save-dev
npm i eslint-plugin-prettier --save-dev
```

🔸 파일 수정
- `package.json`에서 `eslintConfig` 항목을 제거한다.
- `.eslintrc.js`에 다음 스크립트를 덮어쓰기한다.
- ESLint & Prettier에 의해 코드가 변경되기 때문에, Vue CLI로 자동 생성된 파일들을 다시 저장한다.
```javascript
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'none',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
        bracketSameLine: true,
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      }
    ]
  }
}
```

## 🌭 추가 패키지
개발에 편의를 돕는 js 라이브러리들을 추가한다. Vuex, Vue-router, vee-validate는 Vue2를 사용하므로 버전을 지정한다.
```shell
# Veu.js 최근 버전에 맞게 재설치
npm i vue@2.7.14
npm i vuex@3.6.2
npm i vuex-persist
npm i vue-router@3.6.5
npm i vee-validate@3.4.14
npm i axios
npm i axios-mock-adapter
# URL querystring 확장 패키지 
npm i qs
# 날짜 패키지
npm i dayjs
npm i lodash
```

## 🍿 디렉토리 구조
```
+-- axios (Server API 호출)
+-- mock (테스트 API) 
|   +-- data (테스트 데이터)
+-- router (Vue-router)
|   +-- routes
+-- store (Vuex)
|   +-- modules
+-- utils (자주사용하는 공통 function)
|   +-- validations (입력 데이터 검증)
+-- views (화면 Vue 컴포넌트)
|   +-- components
|   +-- pages
```

## 🥓 Axios & Mock

## 🍗 Docker & Jenkins

---
## 🥠 개발 가이드라인
🔸 공용 Constants 선언
  - 공용 상수 선언은 각 모듈과 같은 디렉토리에 파일을 생성한다.
  - `named export`를 이용하여 내보내기를 한다.
```javascript
export const API_ERROR_0001 = '0001'
```

🔸 입력 데이터 검증
- IME와 `v-model`과의 관계 검토 (참조 링크: https://vuejs.org/guide/essentials/forms.html#text)
- `vee-validate` 패키지를 사용한다.
- vee-validate 제공 기본 룰 (참조 링크: https://vee-validate.logaretm.com/v3/guide/rules.html#rules)
- 기본 룰의 메시지를 수정를 수정할 경우, `validations.js`에 덮어쓰기 처리를 추가한다.
```javascript
extend('required', {
  ...required,
  message: 'This field is required'
})
```
- 사용자 지정 룰은 `validations.js`에 추가 사용한다.
```javascript
extend('positive', value => {
  if (value >= 0) {
    return true
  }
  return 'This field must be a positive number'
})
```

🔸 Mock을 이용한 API 단위 테스트 
- `~Data.js`에서 사용하는 Mock adapter는 `~Api.js` 에서 사용하는 같은 Axios instance를 사용한다.
```javascript
// ~Api.js에서 bearerToken를 사용할 경우
axiosInstances.bearerToken.post('/endpoint', requestBody)

// ~Data.js에서도 bearerToken를 사용한다.
mockAdapters.bearerToken.onPost('/endpoint').reply()

```

🔸 초기상태, 요청중, 완료, 실패

🔸 Web storage 사용
