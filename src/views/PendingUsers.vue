<template>
<div class="companies">
  <PendingReportsFilterBar />
  <!-- <CompaniesFilterBar />
  <div class="companies-container">
    <div class="company-info">
      <div class="title-1">
        <h3>Selected company info</h3>
      </div>
      <CompanyInfo />
      <Footer />
    </div>
    <div class="list-companies">
      <div class="title-2">
        <h3>Companies</h3>
      </div>
      <CompaniesList />
    </div>
  </div> -->
</div>
</template>

<script>
import PendingReportsFilterBar from '../components/PendingReportsFilterBar'

export default {
  name: 'PendingUsers',
  components: {
    PendingReportsFilterBar
    // CompaniesFilterBar,
    // CompanyInfo,
    // CompaniesList,
    // Footer,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';
.companies {
  @include flexColumn();
}
.companies-container {
  padding-left: 15px;
  padding-right: 15px;
  @include flexRow(center, space-between);
  width: 1070px;
  height: 75vh;
  background-color: $lightBackgroundColor;
  .company-info {
    @include flexColumn(start, flex-start);
    width: 680px;
    height: 100%;
    // background-color: rosybrown;
    .title-1 {
      @include flexRow(center, flex-start);
      width: 100%;
      height: 70px;
      //   background-color: seagreen;
    }
  }
  .list-companies {
    width: 325px;
    height: 100%;
    // background-color: rgb(156, 188, 143);
    .title-2 {
      @include flexRow();
      width: 100%;
      height: 70px;
    }
  }
}
</style>
