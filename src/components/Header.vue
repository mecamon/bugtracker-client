<template>
  <div class="header">
    <Logo />
    <div class="user-info">
      <img src="../assets/user.svg" alt="user-icon">
      <div class="block-names">
        <p>Carlos Alberto Mejia</p>
        <p class="orange-text">Superuser</p>
      </div>
      <button class="btn btn-secondary">Log out</button>
    </div>
  </div>
</template>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.header {
  @include flexRow(center, space-between);
  width: 1100px;
  height: 94px;
  .user-info {
    @include flexRow(center, space-between);
    width: 340px;
    height: 38px;
    // background-color: red;
    img {
      width: 36px;
      height: auto;
    }
    .block-names {
      @include flexColumn(start, center);
      margin-left: -70px;
      .orange-text {
        color: #f46336;
      }
    }
    button {
      font-size: 14px;
      width: 77px;
      height: 26px;
    }
  }
}
</style>
