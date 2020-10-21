<template>
  <div>
    <div class="company-info-list">
      <div class="no-company-selected" v-if="!getSelectedCompany">
        <h1>Select one company</h1>
      </div>
      <table v-if="getSelectedCompany">
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{{ getSelectedCompany.name }}</td>
          </tr>
          <tr>
            <th>State:</th>
            <td class="text_active"
            v-bind:class="{ text_inactive: getSelectedCompany.isActive == 'Inactive' }" 
            > {{ getSelectedCompany.isActive }} </td>
          </tr>
          <tr>
            <th>Email address:</th>
            <td>{{ getSelectedCompany.email }}</td>
          </tr>
          <tr>
            <th>RNC:</th>
            <td>{{ getSelectedCompany.rnc }}</td>
          </tr>
          <tr>
            <th>Telephone:</th>
            <td>{{ getSelectedCompany.telephone }}</td>
          </tr>
          <tr>
            <th>Users paid:</th>
            <td>{{ getSelectedCompany.usersPaid }}</td>
          </tr>
          <tr>
            <th>Users:</th>
            <td>{{ getSelectedCompany.usersRegistered }}</td>
          </tr>
          <tr>
            <th>Date of exp.:</th>
            <td>{{ getSelectedCompany.dateExp }}</td>
          </tr>
          <tr>
            <th id="description-head">Description:</th>
            <td id="description-body"> {{ getSelectedCompany.description }} </td>
          </tr>
        </tbody>
      </table>
      <div class="company-options" v-if="getSelectedCompany">
        <button class="btn btn-secondary edit" @click="showEditModal(true)">Edit</button>
        <button class="btn btn-secondary deactivate" @click="deactivate(getSelectedCompany)">Deactivate company</button>
        <button class="btn btn-danger delete">Delete company</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getSelectedCompany() {
      return this.$store.getters['companies/getSelectedCompany'];
    },
  },
  methods: {
    showEditModal(payload) {
      this.$store.commit('companies/switchEditModalVisibility', payload)
    },
    async deactivate(payload) {
      const editCompany = {
        "isActive": false,
        "name": payload.name,
        "rnc": payload.rnc,
        "email": payload.email,
        "telephone": payload.telephone,
        "usersPaid": payload.usersPaid
      }

      await this.$store.dispatch('companies/deacivateOneCompany', editCompany)
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

.no-company-selected {
  width: 700px;
  height: 530px;
  @include flexRow();
}
.company-info-list {
  border-bottom: 1px solid $textColor;
  table {
    width: 100%;
    border-top: 1px solid $textColor;
    border-collapse: collapse;
  }
  th {
    width: 190px;
  }
  th,
  td {
    border-top: 1px solid $textColor;
    height: 30px;
    text-align: left;
  }
  td {
    width: 560px;
  }
  #description-head,
  #description-body {
    vertical-align: top;
    height: 220px;
  }
  .company-options {
    @include flexRow(center, space-between);
    width: 412px;
    height: 55px;
    .edit {
      width: 77px;
      height: 27px;
    }
    .deactivate {
      width: 155px;
      height: 27px;
    }
    .delete {
      width: 126px;
      height: 27px;
    }
  }
}
</style>
