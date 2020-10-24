<template>
  <div class="nav">
    <div id="routes">
      <router-link to="/users-menu/pending">Pending</router-link>
       <router-link to="/users-menu/history">History</router-link>
      <button @click="showCreateReportModal">Create report</button>
    </div>
    <span id="search">
      <input type="text" placeholder="Search" />
      <img
        src="../assets/search.svg"
        alt="search-icon"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'UsersNav',
  methods: {
    showCreateReportModal() {
      this.$store.commit('users/switchModalCreateReport', true);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.nav {
  @include flexRow(center, space-between);
  width: 1100px;
  height: 38px;
  // background-color: red;
  #routes {
    width: 380px;
    height: 100%;
    @include flexRow(center, space-between);
    // background-color: black;
    button {
      outline: none;
      cursor: pointer;
      background-color: $darkBackgroundColor;
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      border: 3px solid $mainBtnColor;
      border-radius: 25px;
      font-family: $linksFontFamily;
      font-size: $linksFontSize;
      padding: 6px 15px;
    }
    button:hover {
      background-color: $mainBtnColor;
    }
  }
  #search {
    @include flexRow(center, space-between);
    width: 340px;
    height: 100%;
    background-color: $lightBackgroundColor;
    img {
      cursor: pointer;
      width: 32px;
      height: auto;
      margin-right: 5px;
    }
    input {
      background-color: $lightBackgroundColor;
      border: none;
      height: 100%;
      width: 300px;
      color: #ffffff;
      font-size: 16px;
      text-indent: 5px;
    }
  }
}
</style>
