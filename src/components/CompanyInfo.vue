<template>
  <div class="company-info-list">
    <table>
      <tbody>
        <tr>
          <th>Name:</th>
          <td>Romo CxA</td>
        </tr>
        <tr>
          <th>State:</th>
          <td>Active</td>
        </tr>
        <tr>
          <th>Email address:</th>
          <td>romo@mail.com</td>
        </tr>
        <tr>
          <th>RNC:</th>
          <td>000999888</td>
        </tr>
        <tr>
          <th>Telephone:</th>
          <td>8095239718</td>
        </tr>
        <tr>
          <th>Users paid:</th>
          <td>20</td>
        </tr>
        <tr>
          <th>Users:</th>
          <td>5</td>
        </tr>
        <tr>
          <th>Date of exp.:</th>
          <td>2021-05-06</td>
        </tr>
        <tr>
          <th id="description-head">Description:</th>
          <td id="description-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </td>
        </tr>
      </tbody>
    </table>
    <div class="company-options">
      <button class="btn btn-secondary edit">Edit</button>
      <button class="btn btn-secondary deactivate">Deactivate company</button>
      <button class="btn btn-danger delete">Delete company</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';

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
  th, td {
    border-top: 1px solid $textColor;
    height: 30px;
    text-align: left;
  }
  #description-head, #description-body {
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
