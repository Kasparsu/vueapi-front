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
            <input class="input" v-model="password" type="text" placeholder="password">
          </div>
        </div>
        <div class="field">
          <div class="field">
            <div class="control">
              <button class="button" @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      mounted(){
      },
      methods: {
        login() {
          this.$store.dispatch('auth/login');
        }
      },
      computed:{
        email: {
          get() {
            return this.$store.state.auth.forms.login.email;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'login', key:'email', value: value})
          }
        },
        password: {
          get() {
            return this.$store.state.auth.forms.login.password;
          },
          set(value){
            this.$store.dispatch('auth/setFormData', {form: 'login', key:'password', value: value})
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
