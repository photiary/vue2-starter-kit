# vue2-starter-kit

## 🍕 프로젝트 개발 환경

- Node.js v18.14.0
- npm 9.3.0
- vue 2.6.14

## 🍔 프로젝트 생성
참조사이트: https://cli.vuejs.org/
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
- 파일 수정
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
+-- api (Server API 호출)
+-- mock (테스트 API) 
|   +-- data
+-- router (Vue-router)
|   +-- routes
+-- store (Vuex)
|   +-- modules
+-- utils (자주사용하는 공통 function)
+-- views (화면 Vue 컴포넌트)
|   +-- components
|   +-- pages
```

## 🥓 Axios & Mock

## Docker & Jenkins