<template>
  <div>
    <div class="company-list">
      <table>
        <tbody>
          <tr v-for="(company, index) of getCompanies" :key="index" @click="selectCompany(company._id)">
            <th>{{ company.name }}</th>
            <td class="text_active" :class="{ text_inactive : company.isActive == 'Inactive' }">{{ company.isActive }}</td>
            <td>
              <img src="../assets/view-details.svg" alt="document-icon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      class="page-buttons"
      v-for="(page, index) of getCompanyPages"
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
    this.$store.dispatch('companies/fetchCompanies');
  },
  computed: {
    getCurrentPage() {
      return this.$store.getters['companies/getCurrentPage']
    },
    getCompanies() {
      return this.$store.getters['companies/getCompanies'];
    },
    getCompanyPages() {
      return this.$store.getters['companies/getCompanyPages'];
    },
    
  },
  methods: {
    async getSelectedPage(page) {

      this.$store.commit('companies/changePage', page)
      await this.$store.dispatch('companies/fetchCompanies')
    },
    async selectCompany(id) {
      await this.$store.dispatch('companies/fetchOneCompany', id)
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

.company-list {
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
