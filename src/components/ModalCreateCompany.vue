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
          <h3>New company information</h3>
        </div>
        <div id="name-group">
          <label>Name</label>
          <input type="text" v-model="newCompany.name"/>
          <p class="alert-text" v-if="registerError.name">{{ registerError.name }}</p>
        </div>
        <div id="rnc-group">
          <label>RNC</label>
          <input type="text" v-model="newCompany.rnc" />
          <p class="alert-text" v-if="registerError.rnc">{{ registerError.rnc }}</p>
        </div>
        <div id="email-group">
          <label>Email</label>
          <input type="text" v-model="newCompany.email" />
          <p class="alert-text" v-if="registerError.email">{{ registerError.email }}</p>
        </div>
        <div id="telephone-group">
          <label>Telephone</label>
          <input type="text" v-model="newCompany.telephone" />
          <p class="alert-text" v-if="registerError.telephone">{{ registerError.telephone }}</p>
        </div>
        <div id="users-group">
          <label>Users paid</label>
          <input type="text" v-model="newCompany.usersPaid" />
          <p class="alert-text" v-if="registerError.usersPaid">{{ registerError.usersPaid }}</p>
        </div>
        <div id="date-group">
          <label>Date of expiration</label>
          <input type="date" v-model="newCompany.dateExp" />
          <p class="alert-text" v-if="registerError.dateExp">{{ registerError.dateExp }}</p>
        </div>
        <div id="description-group">
          <label>Description</label>
          <textarea cols="30" rows="10" v-model="newCompany.description"></textarea>
          <p class="alert-text" v-if="registerError.description" 
          >{{ registerError.description }}</p>
        </div>
        <div class="buttons-group">
        <div class="buttons">
          <button class="btn btn-main" @click="postCompany">Register</button>
          <button @click="closeModal" class="btn btn-danger">Cancel</button>
        </div>
        <p class="alert-text" id="fields-required"
         v-if="registerError.required"
         >All fields are required!</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import fieldValidator from '../validators/field-validators'

export default {
  name: 'ModalCreateCompanyFixed',
  data(){
    return {
      newCompany: {
        name:'',
        rnc: '',
        email: '',
        telephone: '',
        usersPaid: '',
        dateExp: '',
        description: ''
      },
    }
  },
  computed: {
    registerError() {
      return this.$store.getters['companies/getRegisterError']
    }
  },
  methods: {
    async postCompany() {
      this.$store.commit('companies/resetErrorState')

      let access = false

      const name = fieldValidator.nameWithNumbers(2, 15, "Name", 'name' , this.newCompany.name)
      const rnc = fieldValidator.number(9, "RNC", "rnc", this.newCompany.rnc)
      const telephone = fieldValidator.number(12, "Telephone", "telephone", this.newCompany.telephone)
      const email = fieldValidator.email(this.newCompany.email)
      const usersPaid = fieldValidator.number(3, "Users paid", "usersPaid", this.newCompany.usersPaid)
      const dateExp = fieldValidator.date(this.newCompany.dateExp)
      const description = fieldValidator.nameWithNumbers(25, 250, "Description", 'description' , this.newCompany.description)

      const fields = [ name, rnc, telephone, email, usersPaid, description, dateExp ]

      for (const field of fields) {
        if (field) this.$store.commit('companies/assignError', field)
        else access = true
      }

      if (access) {
        await this.$store.dispatch('companies/postCompany', this.newCompany) 
      }
    },
    closeModal() {
      this.$store.commit('companies/switchCreateModalVisibility', false);
      this.$store.commit('companies/resetErrorState')
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
  position: relative;
  @include flexColumn();
  background-color: white;
  width: 600px;
  height: 600px;
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
#description-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 306px;
  right: 0;
}
h3 {
  font-size: 20px;
  color: $modalLabelTextColor;
}
input {
  width: 220px;
  height: 30px;
  background-color: #ececec;
  border: none;
  font-size: 14px;
  text-indent: 6px;
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
.buttons-group {
  width: 100%;
  position: absolute;
  top: 486px;
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
  text-indent: 6px;
  width: 462px;
  height: 107px;
  font-family: $textFont;
  font-size: 14px;
  color: #606060;
  background-color: #ececec;
  border: none;
  outline: none;
}
#fields-required {
  font-size: 14px;
  margin-top: 10px;
}
</style>
