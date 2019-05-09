<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <div class="field">
        <div class="error_holder"><a id="error_text"></a></div>
        <div class="field">
          <div class="control">
            <input class="input" v-model="email" type="text" placeholder="email">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" v-model="name" type="text" placeholder="name">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" v-model="password" type="text" placeholder="password">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" v-model="passwordConfirm" type="text" placeholder="password confirm">
          </div>
        </div>
        <div class="field">
          <div class="field">
            <div class="control">
              <button class="button" @click="$store.dispatch('auth/register')">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      computed:{
        email: {
          get() {
            return this.$store.state.auth.forms.register.email;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'register', key:'email', value: value})
          }
        },
        password: {
          get() {
            return this.$store.state.auth.forms.register.password;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'register', key:'password', value: value})
          }
        },
        passwordConfirm: {
          get() {
            return this.$store.state.auth.forms.register.password_confirmation;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'register', key:'password_confirmation', value: value})
          }
        },
        name: {
          get() {
            return this.$store.state.auth.forms.register.name;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'register', key:'name', value: value})
          }
        }
      }
    }
</script>

<style scoped>

  .error_holder{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  #error_text{
    color: red;
  }



</style>
