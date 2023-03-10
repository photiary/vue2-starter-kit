# vue2-starter-kit

## ๐ฅ ๋ชฉ์ฐจ
- [์ฒดํฌ ๋ฆฌ์คํธ](#-์ฒดํฌ-๋ฆฌ์คํธ)
- [ํ๋ก์ ํธ ๊ฐ๋ฐ ํ๊ฒฝ](#-ํ๋ก์ ํธ-๊ฐ๋ฐ-ํ๊ฒฝ)
- [๊ฐ๋ฐ ๊ฐ์ด๋๋ผ์ธ](#-๊ฐ๋ฐ-๊ฐ์ด๋๋ผ์ธ)

---

## ๐ฅก ์ฒดํฌ ๋ฆฌ์คํธ
- [ ] ์ฌ์ฉ ์๋ฒ, ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฑ ํ๋ก์ ํธ ์ค๊ณ์ ๋ง๋ ๋ฒ์  ๊ตฌ์ฑ
- [ ] ํ์๊ด๋ฆฌ
- [ ] CI/CD ํ๊ฒฝ ๊ตฌ์ฑ ์ ํ
- [ ] ๊ฐ๋ฐ(๋ก์ปฌ, ์๋ฒ), ์ด์ ํ๊ฒฝ ๋ถ๋ฆฌ
  - [ ] ํ๊ฒฝ๋ณ์
  - [ ] Mock ํ์คํธ ํ๊ฒฝ
  - [ ] CORS
  - [ ] Log
  - [ ] devtool
- [ ] ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
- [ ] ์ฝ๋ฉ ์ปจ๋ฒค์
- [ ] ๊ณตํต ์ฒ๋ฆฌ
  - [ ] HTTP Headers
  - [ ] API ํธ์ถ
  - [ ] API ์๋ฌ ํธ๋ค๋ฌ
  - [ ] ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
  - [ ] ๋ ์ง ์ฒ๋ฆฌ
  - [ ] ์ด๊ธฐ ์ํ, ์์ฒญ ์ค, ์๋ฃ, ์คํจ
  - [ ] ํ๋ฉด Layout
  - [ ] Dialog(๋ํ์์) modal
  - [ ] ๋ฐ์ดํฐ ํ์ ์์(Vue.js `Filters`)
- [ ] ์ ์ญ ๋ฉ์์ง(์ฝ๋) ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์ ์ญ ์์(์ฝ๋) ๊ด๋ฆฌ
  - [ ] Front-end
  - [ ] Back-end
- [ ] ์น ์คํ ๋ฆฌ์ง(`sessionStorage` ๋๋ `localStorage`)

---

## ๐ ํ๋ก์ ํธ ๊ฐ๋ฐ ํ๊ฒฝ
- Node.js v18.14.0
- npm 9.3.0
- Vue.js 2.7.14

  Vue.js Vue2์ LTS ์ง์์ 2023๋ 12์ 31์ผ์ ์ข๋ฃ๋๋ฏ๋ก Vue 3๋ก ์๊ทธ๋ ์ด๋ ํ์ํ๋ค. ์ฐธ์กฐ ๋งํฌ: https://v2.vuejs.org/lts/

## ๐ ํ๋ก์ ํธ ์์ฑ
์ฐธ์กฐ ๋งํฌ: https://cli.vuejs.org/
```shell
# Vue CLI ์ค์น 
npm install -g @vue/cli
vue --version

# ํ๋ก์ ํธ ์์ฑ
vue create vue2-starter-kit
cd vue2-starter-kit
```

## ๐ ์ฝ๋ฉ ์ปจ๋ฒค์ ๋๊ตฌ
```shell
# eslint ์ค์น
npm install -g -d eslint
eslint --init
```
- โ How would you like to use ESLint? ยท problems
- โ What type of modules does your project use? ยท esm (JavaScript modules)
- โ Which framework does your project use? ยท vue
- โ Does your project use TypeScript? ยท No
- โ Where does your code run? ยท browser
- โ What format do you want your config file to be in? ยท JavaScript
- โ Would you like to install them now? ยท Yes
- โ Which package manager do you want to use? ยท npm

```shell
# prettier ์ค์น
npm i @vue/eslint-config-prettier --save-dev
npm i eslint-plugin-prettier --save-dev
```

๐ธ ํ์ผ ์์ 
- `package.json`์์ `eslintConfig` ํญ๋ชฉ์ ์ ๊ฑฐํ๋ค.
- `.eslintrc.js`์ ๋ค์ ์คํฌ๋ฆฝํธ๋ฅผ ๋ฎ์ด์ฐ๊ธฐํ๋ค.
- ESLint & Prettier์ ์ํด ์ฝ๋๊ฐ ๋ณ๊ฒฝ๋๊ธฐ ๋๋ฌธ์, Vue CLI๋ก ์๋ ์์ฑ๋ ํ์ผ๋ค์ ๋ค์ ์ ์ฅํ๋ค.
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

## ๐ญ ์ถ๊ฐ ํจํค์ง
๊ฐ๋ฐ์ ํธ์๋ฅผ ๋๋ js ํจํค์ง๋ค์ ์ถ๊ฐํ๋ค. Vuex, Vue-router, vee-validate ๋ฑ ํน์  ํจํค์ง๋ Vue2์ ๋ง๋ ๋ฒ์ ์ ์ง์ ํ๋ค.
```shell
# Veu.js ์ต๊ทผ ๋ฒ์ ์ ๋ง๊ฒ ์ฌ์ค์น
npm i vue@2.7.14
npm i vuex@3.6.2
npm i vuex-persist
npm i vue-router@3.6.5
npm i vee-validate@3.4.14
# Vue component๋ฅผ ์ง์ ํ ์์น์ ๋ ๋๋งํ๊ฒ ๋์์ฃผ๋ ํจํค์ง(๋ชจ๋ฌ์ ์ฌ์ฉ) 
npm i portal-vue@2.1.7
npm i axios
npm i axios-mock-adapter
# URL querystring ํ์ฅ ํจํค์ง 
npm i qs
# ๋ ์ง ํจํค์ง
npm i dayjs
npm i lodash
```

## ๐ฟ ๋๋ ํ ๋ฆฌ ๊ตฌ์กฐ
```
+-- axios (Server API ํธ์ถ)
+-- mock (ํ์คํธ API) 
|   +-- data (ํ์คํธ ๋ฐ์ดํฐ)
+-- router (Vue-router)
|   +-- routes
+-- store (Vuex)
|   +-- modules
+-- utils (์์ฃผ์ฌ์ฉํ๋ ๊ณตํต function)
|   +-- validations (์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ)
+-- views (ํ๋ฉด Vue ์ปดํฌ๋ํธ)
|   +-- components
|   +-- pages
```

## ๐ฅ Axios & Mock

## ๐ Docker & Jenkins

---
## ๐ฅ  ๊ฐ๋ฐ ๊ฐ์ด๋๋ผ์ธ
๐ธ ์ ์ญ Constants ์ ์ธ
  - ์ ์ญ ์์ ์ ์ธ์ ๊ฐ ๋ชจ๋๊ณผ ๊ฐ์ ๋๋ ํ ๋ฆฌ์ ํ์ผ์ ์์ฑํ๋ค.
  - `named export`๋ฅผ ์ด์ฉํ์ฌ ๋ด๋ณด๋ด๊ธฐ๋ฅผ ํ๋ค.
```javascript
export const API_ERROR_0001 = '0001'
```

๐ธ ์๋ ฅ ๋ฐ์ดํฐ ๊ฒ์ฆ
- IME(ํ๊ธ ํค๋ณด๋)์ `v-model`๊ณผ์ ๊ด๊ณ๋ก `input` ์ด๋ฒคํธ ๊ฒํ  (์ฐธ์กฐ ๋งํฌ: https://vuejs.org/guide/essentials/forms.html#text)
- `vee-validate` ํจํค์ง๋ฅผ ์ฌ์ฉํ๋ค.
- vee-validate ์ ๊ณต ๊ธฐ๋ณธ ๋ฃฐ (์ฐธ์กฐ ๋งํฌ: https://vee-validate.logaretm.com/v3/guide/rules.html#rules)
- ๊ธฐ๋ณธ ๋ฃฐ์ ๋ฉ์์ง๋ฅผ ์์ ๋ฅผ ์์ ํ  ๊ฒฝ์ฐ, `validations.js`์ ๋ฎ์ด์ฐ๊ธฐ ์ฒ๋ฆฌ๋ฅผ ์ถ๊ฐํ๋ค.
```javascript
extend('required', {
  ...required,
  message: 'This field is required'
})
```
- ์ฌ์ฉ์ ์ง์  ๋ฃฐ์ `validations.js`์ ์ถ๊ฐ ์ฌ์ฉํ๋ค.
```javascript
extend('positive', value => {
  if (value >= 0) {
    return true
  }
  return 'This field must be a positive number'
})
```

๐ธ Mock์ ์ด์ฉํ API ๋จ์ ํ์คํธ 
- `~Data.js`์์ ์ฌ์ฉํ๋ Mock adapter๋ `~Api.js` ์์ ์ฌ์ฉํ๋ ๊ฐ์ Axios instance๋ฅผ ์ฌ์ฉํ๋ค.
```javascript
// ~Api.js์์ bearerTokenClient๋ฅผ ์ฌ์ฉํ  ๊ฒฝ์ฐ
axiosInstances.bearerTokenClient.post('/endpoint', requestBody)

// ~Data.js์์๋ bearerTokenClient๋ฅผ ์ฌ์ฉํ๋ค.
mockAdapters.bearerTokenClient.onPost('/endpoint').reply()
```

๐ธ ๋ฐ์ดํฐ ํ์ ์ง์ 
- `filters.js`์ ๋ฐ์ดํฐ ํ์์ ์ถ๊ฐํ์ฌ ์ ์ญ Vue์์ ์ฌ์ฉํ๋ค. (์ฐธ์กฐ ๋งํฌ: https://v2.vuejs.org/v2/guide/filters.html)
- `Filters` ๊ธฐ๋ฅ์ Vue3์ ๋ง์ด๊ทธ๋ ์ด์ ๋์์ด๋ค. (์ฐธ์กฐ ๋งํฌ: https://v3-migration.vuejs.org/breaking-changes/filters.html#global-filters)

๐ธ ์ด๊ธฐ์ํ, ์์ฒญ์ค, ์๋ฃ, ์คํจ

๐ธ Web storage ์ฌ์ฉ
