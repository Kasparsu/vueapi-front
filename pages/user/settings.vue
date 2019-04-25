<template>
  <div id="window" v-if="$store.state.auth.user.settings">
    <div class="field">
      <label class="label">Age</label>
      <div class="control">
        <input class="input" type="text" v-model="age">
      </div>
    </div>
    <div class="field">
      <label class="label">Dark mode</label>
      <input id="dark_switch" type="checkbox" v-model="dark_mode">
    </div>
    <div class="field">
      <label class="label">Language filter</label>
      <input id="language_filter_switch" type="checkbox" v-model="language_filter">
    </div>
    <button class="button is-success" @click="save">Save changes</button>
  </div>
</template>

<script>
  export default {
    name: "user",
    layout: 'signedIn',
    computed:{
      age: {
        get() {
          return this.userSettings.age;
        },
        set(newValue) {
          this.$store.dispatch('auth/setUserSetting', ["age", newValue]);
          this.$store.dispatch('auth/setUserSetting', ["thisshouldnotbeallowed", newValue]);
        },
      },
      dark_mode: {
        get() {
          return this.userSettings.dark_mode_enabled;
        },
        set(newValue) {
          this.$store.dispatch('auth/setUserSetting', ["dark_mode_enabled", newValue]);
        },
      },
      language_filter: {
        get() {
          return this.userSettings.language_filter_enabled;
        },
        set(newValue) {
          this.$store.dispatch('auth/setUserSetting', ["language_filter_enabled", newValue]);
        },
      },
      userSettings() {
        return this.$store.state.auth.user.settings.values
      }
    },
    methods: {
      save() {
        this.$store.dispatch('auth/updateUserSettings')
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
