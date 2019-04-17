<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="card-header-title">
          {{post.title}}
        </p>
      </header>
      <div class="card-image" v-if="post.images.length">
        <figure class="image is-3by1">
          <img :src="post.images[0].src" alt="Placeholder image">
        </figure>
      </div>
      <div class="modal-card-body">
        <div class="content">
          <p v-html="post.content.split('\n').join('<br>')"></p>
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time :datetime="$moment(post.created_at).format()">{{$moment(post.created_at).fromNow()}}</time>
        </div>
      </div>
      <footer class="modal-card-foot">
        <a class="card-footer-item"><b>{{ post.score }}</b></a>
        <a class="card-footer-item" :class="{'has-text-danger': post.is_liked}" @click="doLike"><i class="fas fa-heart"></i>({{ post.likes_count }})</a>
        <a class="card-footer-item" :class="{'has-text-danger': post.is_disliked}" @click="doDislike"><i class="fas fa-heart-broken is-danger"></i>({{ post.dislikes_count }})</a>
        <a class="card-footer-item"><i class="fas fa-comment"></i></a>
      </footer>
      <footer class="modal-card-foot">
        <a class="card-footer-item"></a>
      </footer>
    </div>
  </div>
</template>

<script>
    export default {
        name: "PostModal",
      props: ['post'],
    }
</script>

<style scoped>

</style>
