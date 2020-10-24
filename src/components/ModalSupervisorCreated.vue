<template>
  <div class="modal-bg">
    <div class="modal">
      <h2 class="success-text">Supervisor created!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalSupervisorCreated',
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
}
h3 {
  font-size: 20px;
  color: $textColor2;
}

</style>
