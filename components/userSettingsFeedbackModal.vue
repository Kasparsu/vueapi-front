<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <div class="content">
          <slot></slot>
        </div>
        <button class="button is-success" @click="Close()">Ok</button>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "userSettingsFeedbackModal",
      methods: {
          Close() {
            this.$store.dispatch("auth/disableUserSettingModal");
          }
      }
    }
</script>

<style scoped>
  .box{
    text-align: center;
  }
  .button{
    margin-top: 20px;
  }
</style>
