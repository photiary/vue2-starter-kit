<template>
  <div>
    <validation-observer v-slot="{ invalid }">
      <!-- <form>태그의 특성으로 엔터키를 누르면 submit 이벤트가 발생하므로 <form>태그 사용에 적합한지 검토한다. -->
      <validation-provider
        name="ID"
        rules="required"
        v-slot="{ errors }">
        ID:
        <input
          type="text"
          :value="id"
          @input="changeInputValue($event, 'id')" />
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <validation-provider
        name="Password"
        rules="required|password"
        v-slot="{ errors }">
        Password:
        <input
          type="password"
          :value="password"
          @input="changeInputValue($event, 'password')" />
        <span>{{ errors[0] }}</span>
      </validation-provider>
      <p>
        <button
          type="button"
          @click="login"
          :disabled="invalid">
          로그인
        </button>
      </p>
    </validation-observer>
    <p>
      <router-link :to="{ name: 'register' }">
        <button type="button">회원가입</button>
      </router-link>
    </p>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import authApi from '@/axios/api/authApi'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  // 전역 인지(Global Awareness) (컴포넌트 바깥의 지식을 필요로 하는 옵션)
  name: 'Login',
  // 템플릿 의존성(Template Dependencies) (템플릿에 이용되는 요소들을 지정하는 옵션)
  components: { ValidationProvider, ValidationObserver },
  // 컴포지션(Composition) (다른 컴포넌트의 속성을 가져와 합치는 옵션)
  mixins: [],
  // 인터페이스(Interface) (컴포넌트의 인터페이스를 지정하는 옵션)
  props: {},
  // 지역 상태(Local State) (반응적인 지역 속성들을 설정하는 옵션)
  data() {
    return {
      id: 'dummy',
      password: 'Dummy12!@',
      message: ''
    }
  },
  computed: {},
  // 이벤트(Events) (반응적인 이벤트에 의해 실행되는 콜백을 지정하는 옵션)
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 비반응적 속성(Non-Reactive Properties) (시스템의 반응성과 관계 없는 인스턴스 속성을 지정하는 옵션)
  methods: {
    async login() {
      try {
        const resToken = await authApi.login(this.id, this.password)
        console.log('Login.vue.login resToken:', resToken)
        this.$store.commit('authModule/SET_TOKEN', resToken.data)
        await this.$router.push({ name: 'home' })
      } catch (error) {
        console.log('Login.login error', error)
        this.message = error.response.data.message
      }
    },
    // IME(한글 키보드)는 v-model을 사용할 수 없기 때문에, input 이벤트로 처리한다.
    // TODO <input>태그와 해당 함수는 공통 컴포넌트 개발 필요
    changeInputValue(event, propertyName) {
      this[propertyName] = event.target.value
    }
  }
}
</script>

<style scoped></style>
