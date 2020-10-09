<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <RouterLink class="navbar-brand" to="/">
      勤怠管理システム
    </RouterLink>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">ホーム <span class="sr-only">(現位置)</span></a>
        <a class="nav-item nav-link" href="#">リンク1</a>
      </div>
    </div>
    <span v-if="isLogin" class="navbar__item">
      {{ username }}
    </span>
    <div v-else class="navbar__item">
      <RouterLink class="button button--link" to="/loginForm">
        Login / Register
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return this.$store.getters['auth/check']
    },
    username () {
      return this.$store.getters['auth/username']
    }
  }
}
</script>
