<template>
  <div class="company-list">
    <table>
      <tbody>
        <tr>
          <th>Romo CxA</th>
          <td>Active</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Tabaco CxA</th>
          <td>Active</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Whiskey</th>
          <td>Active</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Pepe's Hamburguer</th>
          <td>Inactive</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Supermercados SPM:</th>
          <td>Active</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Oleada S.A.</th>
          <td>Inactive</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
        <tr>
          <th>Meca</th>
          <td>Active</td>
          <td><img src="../assets/view-details.svg" alt="document-icon"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CompaniesList'
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

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
  th, td {
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
      visibility:visible;
    }
  }
}
</style>
