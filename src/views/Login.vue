<template>
  <div class="login">
    <div id="logo"><Logo /></div>
    <div id="login-form"><LoginForm /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Home',
  components: {
    Logo,
    LoginForm
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.login {
  @include flexColumn(center, flex-start);
  width: 100%;
  height: 100vh;
  background-color: $lightBackgroundColor;
}
#logo {
  padding-top: 80px
}
#login-form {
  margin-top: auto;
  margin-bottom: auto;
  padding-bottom: 110px;
}

</style>
