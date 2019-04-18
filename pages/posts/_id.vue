<template>
  <div class="columns is-centered">
    <div v-if="post" class="column is-5">
      <post :post="post" ></post>
      <comment-form></comment-form>
      <comment-list :comments="post.comments"></comment-list>
    </div>
  </div>

</template>

<script>
  var faker = require('faker');
    import Post from "../../components/post";
    import Comment from "../../components/Comment";
    import CommentForm from "../../components/forms/comment";
    import CommentList from "../../components/CommentList";
    export default {
        name: "_id",
      components: {CommentList, CommentForm, Comment, Post},
      layout: 'signedIn',
      created() {
        this.$store.dispatch('posts/getPost', this.$route.params.id);
        // this.$store.dispatch('posts/pollComments', this.$route.params.id);
        this.$echo.channel('comments')
          .listen('NewComment', (e) => {
            this.$store.dispatch('posts/addComment', e.comment);
            console.log(e);
          });
      },
      computed: {
          post(){
            return this.$store.state.posts.single;
          }
      },
      data(){
          return {
            comments: [
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
              {
                content: faker.lorem.sentence(6, 3),
                user: faker.name.findName().toLowerCase().replace(' ', '')
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
