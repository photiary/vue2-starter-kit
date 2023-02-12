<template>
  <div>
    id:
    <input
      type="text"
      v-model="id" />
    password:
    <input
      type="password"
      v-model="password" />
    <button
      type="button"
      @click="login()">
      로그인
    </button>
  </div>
</template>

<script>
import authApi from '@/api/authApi'

export default {
  // 전역 인지(Global Awareness) (컴포넌트 바깥의 지식을 필요로 하는 옵션)
  name: 'Login',
  // 템플릿 의존성(Template Dependencies) (템플릿에 이용되는 요소들을 지정하는 옵션)
  components: {},
  // 컴포지션(Composition) (다른 컴포넌트의 속성을 가져와 합치는 옵션)
  mixins: [],
  // 인터페이스(Interface) (컴포넌트의 인터페이스를 지정하는 옵션)
  props: {},
  // 지역 상태(Local State) (반응적인 지역 속성들을 설정하는 옵션)
  data() {
    return {
      id: '',
      password: ''
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
    login() {
      authApi.login().then(response => {
        console.log('Login.login response:', response)
      })
    }
  }
}
</script>

<style scoped></style>
