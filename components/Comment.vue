<template>
  <article class="message is-dark">
    <div class="message-body">
      <div>
        {{ content }}
      </div>
      <div>
        @{{ user }}
      </div>
    </div>

  </article>
</template>

<script>
  var faker = require('faker');
    export default {
        name: "Comment",
      props:['comment'],
      data(){
        return {
          content: faker.lorem.sentence(6, 3),
          user: faker.name.findName().toLowerCase().replace(' ', '')
        }
      }
    }
</script>

<style scoped>

</style>
