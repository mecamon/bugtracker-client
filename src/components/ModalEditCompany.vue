<template>
  <div class="modal-bg">
    <div class="modal">
      <img
        @click="closeModal"
        class="close-icon"
        src="../assets/close.svg"
        alt="close-icon"
      />
      <div class="safe-area">
        <div id="title">
          <h3>Editing company information</h3>
        </div>
        <div id="name-group">
          <label>Name</label>
          <input type="text" v-model="editCompany.name" />
        </div>
        <div id="rnc-group">
          <label>RNC</label>
          <input type="text" v-model="editCompany.rnc" />
          <!-- <p class="alert-text">RNC inserted is already in use!</p> -->
        </div>
        <div id="email-group">
          <label>Email</label>
          <input type="text" v-model="editCompany.email" />
          <!-- <p class="alert-text">RNC inserted is already in use!</p> -->
        </div>
        <div id="telephone-group">
          <label>Telephone</label>
          <input type="text" v-model="editCompany.telephone" />
          <!-- <p class="alert-text">Telephone inserted is already in use!</p> -->
        </div>
        <div id="users-group">
          <label>Users paid</label>
          <input type="text" v-model="editCompany.usersPaid" />
        </div>
        <div id="date-group">
          <label>Date of expiration</label>
          <input type="date" v-model="editCompany.dateExp" />
        </div>
        <div class="buttons-group">
          <div class="buttons">
            <button class="btn btn-main" @click="saveChanges(editCompany)">
              Save
            </button>
            <button @click="closeModal" class="btn btn-danger">Cancel</button>
          </div>
          <p class="alert-text">All fields are required!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalCreateCompanyFixed',
  data() {
    return {
      editCompany: { ...this.$store.getters['companies/getSelectedCompany'] },
    };
  },
  computed: {
    getSelectedCompany() {
      return this.$store.getters['companies/getSelectedCompany'];
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('companies/switchEditModalVisibility', false);
    },
    saveChanges(payload) {

      delete payload._id;
      delete payload.isActive;
      delete payload.usersRegistered;

      this.$store.commit('companies/assignCompanyEdited', payload);

      this.$store.commit('companies/switchEditConfirmModalVisibility', true);
    },
  },
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
  // border: 3px solid rgba($color: #000000, $alpha: 0.03);
  position: relative;
  @include flexColumn();
  background-color: $lightBackgroundColor;
  width: 600px;
  height: 400px;
  border-radius: 4px;
  .safe-area {
    // background-color: rgb(168, 168, 168);
    position: relative;
    height: 100%;
    width: 462px;
  }
}

#title {
  position: absolute;
  top: 39px;
  @include flexRow();
  width: 100%;
}
#name-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 100px;
  left: 0;
}
#rnc-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 100px;
  right: 0;
}
#email-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 172px;
  left: 0;
}
#telephone-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 172px;
  right: 0;
}
#users-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 245px;
  left: 0;
}
#date-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 245px;
  right: 0;
}
h3 {
  font-size: 20px;
  color: $textColor2;
}
input {
  width: 220px;
  height: 30px;
  background-color: $inputBackgroundColor;
  border: none;
  font-size: 14px;
  text-indent: 6px;
}
label {
  font-family: $textFont;
  color: $textColor2;
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
.buttons-group {
  width: 100%;
  position: absolute;
  top: 320px;
  right: 0;
  @include flexColumn();
  .buttons {
    @include flexRow(center, space-between);
    width: 45%;
    button {
      border-radius: 4px;
    }
  }
}
textarea {
  width: 462px;
  height: 107px;
  font-family: $textFont;
  font-size: 14px;
  color: #606060;
  background-color: #ececec;
  border: none;
  outline: none;
}
</style>
