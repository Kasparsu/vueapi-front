<template>
  <article class="message is-dark">
    <div class="message-body">
      <textarea @input="resize" class="input"></textarea>
      <button class="input button is-primary is-12">Submit</button>
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
          }
      }
    }
</script>

<style scoped>
</style>
