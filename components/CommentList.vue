<template>
    <div>
      <comment v-for="comment in comments" :comment="comment"></comment>
    </div>
</template>

<script>
    import Comment from "./Comment";
    export default {
        name: "CommentList",
      components: {Comment},
      props: ['comments']
    }
</script>

<style scoped>

</style>
