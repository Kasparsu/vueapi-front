<template>
  <div class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{post.title}}
        </p>
      </header>
      <div class="card-image" v-if="post.images.length">
        <figure class="image is-4by3">
          <img :src="post.images[0].src" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <p v-html="post.content.split('\n').join('<br>')"></p>
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time :datetime="$moment(post.created_at).format()">{{$moment(post.created_at).fromNow()}}</time>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item"><b>{{ post.score }}</b></a>
        <a class="card-footer-item" :class="{'has-text-danger': post.is_liked}" @click="doLike"><i class="fas fa-heart"></i>({{ post.likes_count }})</a>
        <a class="card-footer-item" :class="{'has-text-danger': post.is_disliked}" @click="doDislike"><i class="fas fa-heart-broken is-danger"></i>({{ post.dislikes_count }})</a>
        <a class="card-footer-item" :class="{'has-text-danger': post.is_favourite}" @click="savePost"><i class="fas fa-star"></i></a>
        <nuxt-link v-if="$route.name != 'posts-id'" :to="'/posts/' + post.id" class="card-footer-item"><i class="fas fa-comment"></i>({{post.comments_count}})</nuxt-link>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "post",
      props: ['post'],
      methods: {
          doLike(){
            this.$store.dispatch('posts/likePost', this.post.id);
          },
          doDislike(){
            this.$store.dispatch('posts/dislikePost', this.post.id);
          },
        savePost(){
            this.$store.dispatch('posts/saveFavoritePost', this.post.id);
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
