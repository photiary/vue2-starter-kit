<template>
  <div>
    <p>
      id:
      <input v-model="id" />
      이름:
      <input v-model="name" />
      password:
      <input v-model="password" />

      <button
        type="button"
        @click="register()">
        등록
      </button>
    </p>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
import accountApi from '@/axios/api/accountApi'
export default {
  // 전역 인지(Global Awareness) (컴포넌트 바깥의 지식을 필요로 하는 옵션)
  name: 'Register',
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
      name: '',
      password: '',
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
    async register() {
      console.log('Register.register')
      const reqBody = {
        id: this.id,
        name: this.name,
        password: this.password
      }

      try {
        const resRegister = await accountApi.register(reqBody)

        const token = resRegister.data
        console.log('Register.register token:', token)

        this.$store.commit('authModule/SET_TOKEN', token)
        await this.$router.push({ name: 'home' })
      } catch (error) {
        console.error('Register.register error:', error)
        this.message = error.response.data.message
      }
    }
  }
}
</script>

<style scoped></style>
