<template>
  <div v-if="$store.state.auth.darkModeEnabled" :class="[ $store.state.auth.darkModeEnabled ? 'background-dark' : 'background-light' ]">
    <main-menu></main-menu>
    <nuxt />
  </div>
</template>

// Darkmode color sheet
// Text: #fefefe
// Tausta värv: #lble21
// Hover/Highlight värv: #3273dc
// Heledamad elemendid: #333949

<style>
  .background-dark{
    background-color: #1b1e21;
    color: #fefefe;
  }
  .background-dark .card{
    background-color: #333949;
    color: #fefefe;
  }
  .background-dark .card-header-title{
    color: #fefefe;
  }
  .background-dark .navbar{
    background-color: #333949;
    color: #fefefe;
  }
  .background-dark .navbar-item{
    color: #fefefe;
  }
  .background-dark .navbar-item.is-active{
    color: #fefefe;
    background-color: #3273dc;
  }
  .background-dark .navbar-item:hover{
    color: #fefefe;
    background-color: #3273dc;
  }
  .background-dark .navbar-item.has-dropdown.is-hoverable:hover{
    background-color: #3273dc;
  }
  .background-dark .navbar-link{
    color: #3273dc;
  }
  .background-dark .navbar-link:hover{
    background-color: #3273dc;
  }
  .background-dark .navbar-dropdown{
    color: #fefefe;
    background-color: #333949;
    border-top: 2px solid #333949;
  }
  .background-dark .navbar-divider{
    background-color: #1b1e21;
  }
  .background-dark .button{
    background-color: #333949;
    color: #fefefe;
  }
  .background-dark .button.is-primary{
    background-color: #00d1b2;
    color: #fefefe;
  }
  .background-dark .button.is-danger{
    background-color: #ff3860;
    color: #fefefe;
  }
  .background-dark .message-body{
    background-color: #333949;
    color: #fefefe !important;
  }
  .background-dark .card-footer-item:hover{
    color: mediumpurple;
  }

</style>
<script>
  import MainMenu from "../components/mainmenu";
  export default {
    components: {MainMenu},
    middleware:['signedIn']
  }
</script>
