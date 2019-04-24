<template>
  <div id="window">
    <p>{{this.$store.state.auth.user.settings.values.dark_mode_enabled}}</p>
    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input class="input" type="text">
      </div>
    </div>
    <div class="field">
      <label class="label">Dark mode</label>
      <input id="dark_switch" type="checkbox">
    </div>
    <div class="field">
      <label class="label">Language filter</label>
      <input id="language_filter_switch" type="checkbox" :checked="dark">
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    layout: 'signedIn',
    data: {

    },
    computed:{
      dark() {
        return this.$store.state.auth.user.settings.values.dark_mode_enabled
      }
    }
  }
</script>

<style>
  #window {
    margin: auto;
    width: 50%;
    padding: 10px;
  }
</style>
