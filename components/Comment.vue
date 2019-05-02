<template>
  <article class="message is-dark">
    <div class="message-body">
      <div>
        {{ comment.content }}
      </div>
      <div>
        @{{ comment.user.name }}
      </div>
      <div>
        {{ comment.created_at }}
      </div>
      <br>
      <footer class="card-footer">
        <a class="card-footer-item" :class="{'has-text-danger': comment.is_liked}" @click="doLike"><i class="fas fa-heart"></i>{{ comment.likes_count }}</a>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: "Comment",
  props:['comment'],
  methods: {
    doLike(){
      this.$store.dispatch('posts/likeComment', this.comment.id);
    }
  }
}
</script>

<style scoped>

</style>
