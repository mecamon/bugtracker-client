<template>
  <div class="nav">
    <div id="routes">
      <router-link to="/superuser/companies">Companies</router-link>
      <router-link to="#">Messages</router-link>
      <button @click="showCreateCompanyModal">Create company</button>
    </div>
    <span id="search">
      <input type="text" placeholder="Search" />
      <img
        @click="showCreateCompanyModal"
        src="../assets/search.svg"
        alt="search-icon"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: 'SuperuserNav',
  methods: {
    showCreateCompanyModal() {
      this.$store.commit('companies/switchCreateModalVisibility', true);
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
    width: 476px;
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
