<template>
  <div class="field">
    <div class="error_holder"><a id="error_text"></a></div>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input" v-model="title" type="text" placeholder="title">
        <span class="icon is-left">
      <i class="fas fa-envelope"></i>
    </span>
        <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <textarea class="textarea is-primary" placeholder="Content" v-model="content"></textarea>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "post",
      data(){
          return {
          }
      },
      computed: {
          title: {
              // getter
              get() {
                return this.$store.state.posts.modal.edit.data.title;
              },
              // setter
              set(newValue) {
                console.log('hello');
                  this.$store.dispatch('posts/setFormData', {key:'title', value: newValue, modal:'edit'})
              }
          },
        content: {
          // getter
          get() {
            return this.$store.state.posts.modal.edit.data.content;
          },
          // setter
          set(newValue) {
            this.$store.dispatch('posts/setFormData', {key:'content', value: newValue, modal:'edit'})
          }
        }
      }
    }
</script>

<style scoped>

  .error_holder{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  #error_text{
    color: red;
  }

</style>
