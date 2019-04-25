<template>
  <div v-scroll="handle">
    <post v-for="post in $store.state.posts.list" :post="post"></post>
  </div>


</template>

<script>
    import Post from "./post";
    import InfiniteScroll from "./infiniteScroll";
    export default {
        name: "postListFavorites",
        components: {InfiniteScroll, Post},
        data(){
          return {

          }
        },
      created() {
        this.$store.dispatch('posts/loadFavoritesPosts');
      },
      methods: {
        loadPosts(){
          this.$store.dispatch('posts/loadFavoritesPosts');
        }
      }
    }
</script>

<style scoped>

</style>
