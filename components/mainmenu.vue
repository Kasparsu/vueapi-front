<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link v-for="link in links" class="navbar-item" :to="link.link" :class="{'is-active': routeActive(link.link)}">{{link.title}}</nuxt-link>
      </div>
      <div class="navbar-end" >
        <div class="navbar-item" v-if="!$store.state.auth.token">
          <div class="buttons">
            <nuxt-link to="/auth/register" class="button is-primary">
              <strong>Sign up</strong>
            </nuxt-link>
            <nuxt-link to="/auth/login" class="button is-light">
              Log in
            </nuxt-link>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable" v-if="$store.state.auth.token">
          <a class="navbar-link">
            {{$store.state.auth.user.name}}
          </a>

          <div class="navbar-dropdown is-right">
            <nuxt-link :to="'/profile/' + 1/*$store.state.auth.user.id*/"  class="navbar-item" >
              Profile
            </nuxt-link>
            <hr class="navbar-divider">
            <a class="navbar-item" @click="$store.dispatch('auth/logout')">
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
    export default {
      name: "mainmenu",
      data() {
          return {
            links: [
              {title: 'Index', link: '/'},
              {title: 'Posts', link: '/posts'},
              {title: 'List', link: '/posts/list'}
            ],
            id:this.$store.state.auth.user.id
          }
      },
      methods: {
          routeActive(link){
            return link == this.$route.fullPath;
          }
      }
    }
</script>

<style scoped>
  .menu {
    width: 20%;
  }
</style>
