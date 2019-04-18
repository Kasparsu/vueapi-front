<template>
  <article class="message is-dark">
    <div class="message-body">
      <div>
        {{ comment.content }}
      </div>
      <div>
        @{{ comment.user.name }}
      </div>
    </div>

  </article>
</template>

<script>

    export default {
        name: "Comment",
      props:['comment']
    }
</script>

<style scoped>

</style>
