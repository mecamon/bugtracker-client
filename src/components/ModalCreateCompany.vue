<template>
  <div class="modal-bg">
    <div class="modal">
      <img class="close-icon" src="../assets/close.svg" alt="close-icon">
      <div class="safe-area">
        <div class="center">
          <h3>New company information</h3>
        </div>
      <div class="row">
        <div class="column">
          <label>Name</label>
          <input type="text" />
          <p>.</p>
        </div>
        <div class="column">
          <label>RNC</label>
          <input type="text" />
          <p class="alert-text">RNC inserted is already in use!</p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <label>Email</label>
          <input type="text" />
          <p class="alert-text">Email inserted is already in use!</p>
        </div>
        <div class="column">
          <label>Email</label>
          <input type="text" />
          <p class="alert-text">Telephone inserted is already in use!</p>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <label>Users paid</label>
          <input type="text" />
        </div>
        <div class="column">
          <label>Date of expiration</label>
          <input type="date" />
        </div>
      </div>
      <div class="column">
        <label>Description</label>
        <textarea id="" cols="30" rows="10"></textarea>
        <p class="alert-text">
          Description can have a maximun of 400 characters!
        </p>
      </div>
      <div class="buttons-group">
        <div class="buttons">
          <button class="btn btn-main">Register</button>
          <button class="btn btn-danger">Cancel</button>
        </div>
        <p class="alert-text">All fields are required!</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateCompany',
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';
@import '../styles/mixins';
.modal-bg {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.5);
  @include flexRow();
}
.modal {
  position: relative;
  @include flexColumn();
  background-color: white;
  width: 600px;
  height: 600px;
  border-radius: 4px;
  .safe-area {
    @include flexColumn(stretch, space-evenly);
    // background-color: red;
    height: 85%;
    width: 462px;
  }
}
.center {
  @include flexRow();
}
.row {
  @include flexRow(center, space-between);
}
.column {
  @include flexColumn(start, center);
}
.buttons-group {
  @include flexColumn();
  .buttons {
    @include flexRow(center, space-between);
    width: 45%;
    button {
      border-radius: 4px;
    }
  }
}
h3 {
  font-size: 20px;
  color: $modalLabelTextColor;
}
input {
  width: 220px;
  height: 30px;
  background-color: #ECECEC;
  border: none;
  font-size: 14px;
  text-indent: 6px;
}
textarea {
  width: 462px;
  height: 107px;
  outline: none;
  background-color: #ECECEC;
  border: none;
  font-size: 14px;
}
label {
  font-family: $textFont;
  color: $modalLabelTextColor;
  font-size: 14px;
}
.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 14px;
  height: auto;
  cursor: pointer;
}
</style>
