<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <post-list-favorites></post-list-favorites>
    </div>
  </div>
</template>

<script>
  import PostListFavorites from "../../components/postListFavorites";
  import PostModal from "../../components/PostModal";
    export default {
      name: "Favorites",
      components: {PostModal, PostListFavorites},
      layout: 'signedIn'
    }
</script>

<style scoped>

</style>
