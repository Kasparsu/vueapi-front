<template>
  <a :class="{'feedback':true,'feedback-active':this.$store.state.messages.modal}" @click="$store.dispatch('messages/toggleChat');">
    Click to Chat
  </a>
</template>

<script>
    export default {
        name: "Chatbutton"
    }
</script>

<style scoped>
  .feedback {
    background-color : #3273dc;
    color: white;
    padding: 10px 20px;
    border-radius: 50px;
    border-color: #46b8da;
  }
  .feedback-active{
    position: absolute;
    top: -2.5em;
  }
</style>
