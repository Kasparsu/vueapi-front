<template>
  <article class="message is-dark">
    <div class="message-body">
      <textarea v-model="commentText" @input="resize" class="input"></textarea>
      <button class="input button is-primary is-12" @click="postComment">Submit</button>
    </div>
  </article>
</template>

<script>
    export default {
        name: "comment-form",
        methods: {
            resize(e) {
              e.target.style.height = "1px";
              e.target.style.height = (25+e.target.scrollHeight)+"px";
            },
          postComment(){
              this.$store.dispatch("posts/postComment");
          }
        },
      computed: {
          commentText: {
            get() {
              return this.$store.state.posts.comment.text;
            },
            set(value){
              this.$store.dispatch("posts/setCommentText", value);
            }
          }
      }
    }
</script>

<style scoped>
</style>
