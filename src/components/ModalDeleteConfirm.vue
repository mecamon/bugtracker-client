<template>
  <div class="modal-bg">
    <div class="modal">
      <h2 class="success-text" v-if="success">Company deleted!</h2>
      <div class="safe-area" v-if="!success">
        <div id="title">
          <h3>Delete confirmation</h3>
        </div>
        <p>Type "{{ getSelectedCompany.name }}" in input below</p>
        <input type="text" v-model="deleteInput" />
        <p class="alert-text" v-if="showAlert">Names don't match!</p>
        <div class="buttons-group">
          <button
            class="btn btn-success"
            @click="deleteCompany(getSelectedCompany)"
          >
            Agree
          </button>
          <button @click="closeModal" class="btn btn-danger">Discard</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalDeleteConfirm',
  data() {
    return {
      success: false,
      deleteInput: '',
      showAlert: false,
    };
  },
  computed: {
    getSelectedCompany() {
      return this.$store.getters['companies/getSelectedCompany'];
    },
  },
  methods: {
    closeModal() {
      this.$store.commit('companies/switchDeleteModalVisibility', false);
    },
    deleteCompany(payload) {

      if (payload.name == this.deleteInput) {
        this.success = true;

        setTimeout(async () => {
          await this.$store.dispatch('companies/deleteCompany', payload._id);
          
          this.$store.commit(
            'companies/switchDeleteModalVisibility',
            false
          );
        }, 2500);

      } else {
        this.showAlert = true;
      }
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
  width: 300px;
  height: 200px;
  border-radius: 4px;
  .safe-area {
    // background-color: rgb(168, 168, 168);
    position: relative;
    @include flexColumn(center, space-evenly);
    height: 100%;
    width: 100%;
  }
}
.buttons-group {
  @include flexRow(center, space-evenly);
  width: 80%;
  button {
    border-radius: 4px;
  }
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
</style>
