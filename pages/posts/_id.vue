<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <post v-if="post" :post="post" ></post>
      <comment-form></comment-form>
      <comment></comment>
      <comment></comment>
    </div>
  </div>

</template>

<script>
    import Post from "../../components/post";
    import Comment from "../../components/Comment";
    import CommentForm from "../../components/forms/comment";
    export default {
        name: "_id",
      components: {CommentForm, Comment, Post},
      layout: 'signedIn',
      created() {
        this.$store.dispatch('posts/getPost', this.$route.params.id)
      },
      computed: {
          post(){
            return this.$store.state.posts.single;
          }
      }
    }
</script>

<style scoped>

</style>
