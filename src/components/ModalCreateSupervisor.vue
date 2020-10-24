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
          <h3>New supervisor information</h3>
        </div>
        <div id="firstname-group">
          <label>Firstname</label>
          <input type="text" v-model="newSupervisor.firstname" />
          <p class="alert-text" v-if="registerError.firstname">
            {{ registerError.firstname }}
          </p>
        </div>
        <div id="lastname-group">
          <label>Lastname</label>
          <input type="text" v-model="newSupervisor.lastname" />
          <p class="alert-text" v-if="registerError.lastname">
            {{ registerError.lastname }}
          </p>
        </div>
        <div id="username-group">
          <label>Username</label>
          <input type="text" v-model="newSupervisor.username" />
          <p class="alert-text" v-if="registerError.username">
            {{ registerError.username }}
          </p>
        </div>
        <div id="password-group">
          <label>Password</label>
          <input type="password" v-model="newSupervisor.password" />
          <p class="alert-text" v-if="registerError.password">
            {{ registerError.password }}
          </p>
        </div>
        <div id="email-group">
          <label>Email</label>
          <input type="text" v-model="newSupervisor.email" />
          <p class="alert-text" v-if="registerError.email">
            {{ registerError.email }}
          </p>
        </div>
        <div id="gender-group">
          <label>Gender</label>
          <!-- <input type="text" v-model="newSupervisor.gender" /> -->
          <select name="date" v-model="newSupervisor.gender">
            <option disabled value="">Select one</option>
            <option
              v-for="option in genderOptions"
              :key="option.value"
              :value="option.value"
              >{{ option.text }}</option
            >
          </select>
          <p class="alert-text" v-if="registerError.gender">
            {{ registerError.gender }}
          </p>
        </div>
        <div id="birth-group">
          <label>Birth</label>
          <input type="date" v-model="newSupervisor.birth" />
          <p class="alert-text" v-if="registerError.birth">
            {{ registerError.birth }}
          </p>
        </div>
        <div id="id-company-group">
          <label>Company ID</label>
          <input type="text" v-model="newSupervisor.idCompany" />
          <p class="alert-text" v-if="registerError.idCompany">
            {{ registerError.idCompany }}
          </p>
        </div>
        <div class="buttons-group">
          <div class="buttons">
            <button class="btn btn-main" @click="postSupervisor">
              Register
            </button>
            <button @click="closeModal" class="btn btn-danger">Cancel</button>
          </div>
          <!-- <p class="alert-text" id="fields-required"
         v-if="registerError.required"
         >All fields are required!</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fieldValidator from '../validators/field-validators';

export default {
  name: 'ModalCreateSupervisor',
  data() {
    return {
      newSupervisor: {
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        email: '',
        gender: '',
        birth: '',
        idCompany: '',
      },
      genderOptions: [
        { text: "Male", value: "m" },
        { text: "Female", value: "f" },
        { text: "Custom", value: "c" },
      ]
    };
  },
  computed: {
    registerError() {
      return this.$store.getters['auth/getRegisterSupervisorError'];
    },
  },
  methods: {
    async postSupervisor() {
      this.$store.commit('auth/resetErrorState');

      let access = false;

      const firstname = fieldValidator.name(
        2,
        'Firstname',
        'firstname',
        this.newSupervisor.firstname
      );
      const lastname = fieldValidator.name(
        2,
        'Lastname',
        'lastname',
        this.newSupervisor.lastname
      );
      const username = fieldValidator.nameWithNumbers(
        4,
        15,
        'Username',
        'username',
        this.newSupervisor.username
      );
      const password = fieldValidator.password(this.newSupervisor.password);
      const email = fieldValidator.email(this.newSupervisor.email);
      const gender = fieldValidator.name(
        1,
        'Gender',
        'gender',
        this.newSupervisor.gender
      );
      const birth = fieldValidator.date(
        'Birth',
        'birth',
        this.newSupervisor.birth
      );
      const idCompany = fieldValidator.idCompany(this.newSupervisor.idCompany);

      const fields = [
        firstname,
        lastname,
        username,
        password,
        email,
        gender,
        birth,
        idCompany,
      ];

      for (const field of fields) {
        if (field) this.$store.commit('auth/assignError', field);
        else access = true;
      }

      if (access) {
        await this.$store.dispatch('auth/postSupervisor', this.newSupervisor);
      }
    },
    closeModal() {
      this.$store.commit('auth/switchModalCreateSuperVisibility', false);

      this.$store.commit('auth/resetErrorState');
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
  background-color: $lightBackgroundColor;
  width: 660px;
  height: 500px;
  border-radius: 4px;
  .safe-area {
    // background-color: rgb(168, 168, 168);
    position: relative;
    height: 100%;
    width: 550px;
  }
}
#title {
  position: absolute;
  top: 39px;
  @include flexRow();
  width: 100%;
}
#firstname-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 100px;
  left: 0;
}
#lastname-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 100px;
  right: 0;
}
#username-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 172px;
  left: 0;
}
#password-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 172px;
  right: 0;
}
#email-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 245px;
  left: 0;
}
#gender-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 245px;
  right: 0;
}
#birth-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 318px;
  left: 0;
}
#id-company-group {
  @include flexColumn(start, center);
  position: absolute;
  top: 318px;
  right: 0;
}
h3 {
  font-size: 20px;
  color: $textColor2;
}
input, select {
  width: 260px;
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
  top: 400px;
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
#fields-required {
  font-size: 14px;
  margin-top: 10px;
}
</style>
