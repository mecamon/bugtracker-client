<template>
  <div class="logo">
   <img src="../assets/bug_light.svg" alt="bug-logo">
   <h1>Bug tracker</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.logo {
  @include flexRow();
  img {
    width: 62px;
    height: auto;
    cursor: pointer;
  }
  h1 {
    margin-left: 15px;
    cursor: pointer;
  }
}


</style>
