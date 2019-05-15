<template>
    <div>
        <form class="form-area">
            <input class="message" v-model="messageText" placeholder="message" type="text">
            <input style="display:none" @click.stop.prevent="submit()" type="submit">
        </form>
    </div>
</template>

<script>
    export default {
        name: "message-form",
        data(){
            return{
                messageText:""
            }
        },
        methods: {
            submit(){
                this.$api.service.sendMessage(this.messageText).then(Response => {
                    console.log(Response);
                })
                var message = {content: this.messageText, user:{name:this.$store.state.auth.user.name}}
                this.$store.dispatch('messages/addMessages',message);
                this.messageText=""
            }
           
        },
      computed: {
      }
    }
</script>

<style scoped>
    .message{
        width: 90%;
        margin-left: 15px;
        margin-bottom: 15px;
        padding: 5px;
        border-radius: 25px;
        border:1px solid #3273dc;
    }
    .message:focus{
        outline-width: 0;
        border: 1px solid #46b8da;
    }
    
</style>