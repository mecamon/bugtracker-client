<template>
  <div class="modal-bg">
    <div class="modal">
      <h2 class="success-text" v-if="success">Company deactivated!</h2>
      <div class="safe-area" v-if="!success">
        <div id="title">
          <h3>Deactivate confirmation</h3>
        </div>
          <div class="buttons-group">
            <button class="btn btn-success" @click="saveChanges(editCompany)">
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
  name: 'ModalDeactivateConfirm',
  data() {
    return {
      editCompany: { ...this.$store.getters['companies/getCompanyEdited'] },
      success: false
    };
  },
  methods: {
    closeModal() {
      this.$store.commit('companies/switchDeactivateModalVisibility', false);
    },
     saveChanges(payload) {

      this.success = true

      setTimeout(async () => {

        await this.$store.dispatch('companies/editOneCompany', payload);

        this.$store.commit('companies/switchDeactivateModalVisibility', false);
      }, 2500)
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

</style>
