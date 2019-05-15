<template>
  <div>
    <main-menu></main-menu>
    <nuxt />
    <chatarea></chatarea>
  </div>
</template>

<style>
</style>
<script>
  import MainMenu from "../components/mainmenu";
  import Chatarea from "../components/chatarea";
  export default {
    components: {Chatarea, MainMenu},
    middleware:['signedIn']
  }
</script>
