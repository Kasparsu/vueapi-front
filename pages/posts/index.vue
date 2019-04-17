<template>
    <div class="columns is-centered">
      <div class="column is-5">
        <post-list></post-list>
      </div>
    </div>
</template>

<script>
    import PostList from "../../components/postList";
    import PostModal from "../../components/PostModal";
    export default {
        name: "posts",
      components: {PostModal, PostList},
      layout: 'signedIn'
    }
</script>

<style scoped>

</style>
