<template>
  <div>
    <div class="report-list">
      <table>
        <tbody>
          <tr v-for="(report, index) of getReports" :key="index" @click="selectReport(report._id)">
            <th>{{ report.app }}</th>
            <td class="text_active" :class="{ text_inactive : report.isSelect == 'Inactive' }">{{ report.isSelect }}</td>
            <td>
              <img src="../assets/view-details.svg" alt="document-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="page-buttons"
      v-for="(page, index) of getReportPages"
      :key="index"
    >
      <button class="btn btn-secondary btn-page" @click="getSelectedPage(page)">
        {{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompaniesList',
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch('pendingUsers/fetchPendingReports');
  },
  computed: {
    getCurrentPage() {
      return this.$store.getters['pendingUsers/getCurrentPage']
    },
    getReports() {
      return this.$store.getters['pendingUsers/getReports'];
    },
    getReportPages() {
      return this.$store.getters['pendingUsers/getReportPages'];
    },
    
  },
  methods: {
    async getSelectedPage(page) {

      this.$store.commit('pendingUsers/changePage', page)
      await this.$store.dispatch('pendingUsers/fetchPendingReports')
    },
    async selectReport(id) {
      await this.$store.dispatch('pendingUsers/fetchOneReport', id)
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.page-buttons {
  display: inline-block;
  padding-left: 5px;
  padding-top: 5px;
  .btn-page {
    width: 27px;
    height: 27px;
  }
}

.report-list {
  border-bottom: 1px solid $textColor;
  table {
    width: 100%;
    border-top: 1px solid $textColor;
    border-collapse: collapse;
  }
  th {
    width: 170px;
  }
  th,
  td {
    border-top: 1px solid $textColor;
    height: 30px;
    text-align: left;
    cursor: pointer;
    img {
      width: 20px;
      height: auto;
      visibility: hidden;
    }
  }
  tr:hover {
    background-color: rgba($color: #f46336, $alpha: 0.5);
    img {
      visibility: visible;
    }
  }
}
</style>
