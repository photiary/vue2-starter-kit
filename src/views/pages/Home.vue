<template>
  <div>
    <h1>Home</h1>
    <div v-if="loading">불러오는 중...</div>
    <div v-else>
      <p>{{ account }}</p>
      <p>날짜: {{ account?.createAt | simpleDate }}</p>
      <p>{{ message }}</p>
    </div>
    <button
      type="button"
      @click="logout">
      로그아웃
    </button>
  </div>
</template>

<script>
import accountApi from '@/axios/api/accountApi'
export default {
  // 전역 인지(Global Awareness) (컴포넌트 바깥의 지식을 필요로 하는 옵션)
  name: 'Home',
  // 템플릿 의존성(Template Dependencies) (템플릿에 이용되는 요소들을 지정하는 옵션)
  components: {},
  // 컴포지션(Composition) (다른 컴포넌트의 속성을 가져와 합치는 옵션)
  mixins: [],
  // 인터페이스(Interface) (컴포넌트의 인터페이스를 지정하는 옵션)
  props: {},
  // 지역 상태(Local State) (반응적인 지역 속성들을 설정하는 옵션)
  data() {
    return {
      loading: false,
      account: null,
      message: ''
    }
  },
  computed: {},
  // 이벤트(Events) (반응적인 이벤트에 의해 실행되는 콜백을 지정하는 옵션)
  watch: {},
  beforeCreate() {},
  async created() {
    // API 호출 전에 '불러오는 중...'을 표시하도록 한다.
    this.loading = true

    try {
      const resAccount = await accountApi.fetchAccount()
      this.account = resAccount.data
    } catch (error) {
      console.log('Home.vue.created error:', error)
      this.message = error.response.data.message
    } finally {
      // API 호출 마지막 응답에 데이터를 표시하도록 한다.
      this.loading = false
    }
  },
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 비반응적 속성(Non-Reactive Properties) (시스템의 반응성과 관계 없는 인스턴스 속성을 지정하는 옵션)
  methods: {
    logout() {
      this.$store.dispatch('authModule/logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped></style>
