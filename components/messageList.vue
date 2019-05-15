<template>
    <div class="message-list">
      <message v-for="(item,index) in this.$store.state.messages.messages" :key="index" :sender="item.user.name" :message="item.content"></message>
    </div>
</template>

<script>
    import Message from "./message";
    export default {
        name: "Messagelist",
      components: {Message},
      data(){
        return {
          messages:[]
        }
      },
      created(){
          this.$echo.channel('message')
          .listen('NewMessage', (e) => {
            console.log(e);
            this.$store.dispatch('messages/addMessages',e.message);
          });
      }
      
    }
</script>

<style scoped>
    .message-list{
      overflow-y:auto;
      height: 98%;
      padding: 10px;
    }
</style>
