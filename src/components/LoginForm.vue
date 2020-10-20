<template>
  <div class="login-form">
    <h2>Credentials</h2>
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" v-model="credentials.username" />
      <p class="alert-text" v-if="credentials.username == null">
        Username is a required field
      </p>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" v-model="credentials.password" />
      <p class="alert-text" v-if="credentials.password == null">
        Password is a required field
      </p>
    </div>
    <button class="btn btn-main" @click="login">Login</button>
    <p class="alert-text" v-if="error.isShowing">{{ error.message }}</p>
    <p id="link">Forgot password</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    };
  },
  computed: {
    error() {
      return this.$store.getters['auth/getError'];
    },
  },
  methods: {
    async login() {
      for (const key in this.credentials) {
        if (this.credentials[key] === '') {
          this.credentials[key] = null;
          return;
        }
      }

      const response = await this.$store.dispatch(
        'auth/login',
        this.credentials
      );

      if (response) {
        const { data } = response;

        const { firstname, lastname, token } = data;

        localStorage.setItem('firstname', firstname);
        localStorage.setItem('lastname', lastname);
        localStorage.setItem('token', token);

        this.$router.push('superuser/companies');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.login-form {
  @include flexColumn(center, space-evenly);
  width: 340px;
  height: 300px;
  background-color: #ffffff;
  border: 1px solid $mainBorderColor;
  border-radius: 4px;
  .form-group {
    @include flexColumn(start, center);
    label {
      font-size: 14px;
      color: $textColor;
      font-family: $textFont;
      margin-left: 10px;
    }
    input {
      width: 220px;
      height: 36px;
      border-radius: 18px;
      text-indent: 15px;
      font-family: $textFont;
      font-size: 14px;
    }
    p {
      margin-left: 10px;
    }
  }
  #link {
    color: #3675f4;
    font-family: $textFont;
    cursor: pointer;
  }
}
</style>
