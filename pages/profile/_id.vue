<template>
    <div v-if="profile" class="border">
      <img class="image" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>
      <div class="text">
        <div class="name">
         Name : {{$store.state.auth.profileUser.name}}
        </div>
        <div class="age">
         Age : {{$store.state.auth.profileUser.age}}
        </div>
        <div class="email">
         E-mail : {{$store.state.auth.profileUser.email}}
        </div>
      </div>
      <p class="biotext">My bio</p>
      <textarea class="bio" v-model="bio">
      </textarea>
      <button v-if="profile" @click="editBio()" class="edit" type="button">
      Save Bio
      </button>
    </div>
</template>

<script>
    export default {
        name: "_id",
      layout: 'signedIn',
      created() {
        this.$store.dispatch('auth/getProfile', this.$route.params.id);
        console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBb");
      },
      data(){
        return{
          bio:"loading"
        }
      },
      computed: {
        profile(){
          this.bio = this.$store.state.auth.profileUser.bio;
          return this.$store.state.auth.profileUser;
        }
      },
      methods:{
        editBio: function(){
          let payload={"bio":this.bio,"id":this.$route.params.id};
          this.$store.dispatch('auth/setBio', payload);
          console.log(this.bio)
        }
      },
    }

</script>

<style scoped>
.edit{
  position:relative;
  top: 30%;
  /* right: 23%; */
  background-color: rgba(108, 218, 172, 0.507);
  color: red;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-family: 'Comic Sans';
  border: 5px solid yellow;
}
.border{
  border: 5px solid blue;
  border-radius: 10px;
  margin: 0% 20% 0 20%;
  height: 500px;
}
.image{
  max-width: 200px;
  max-height: 200px;
  display: inline-block;
}
.text {
  display: inline-block;
  line-height: 80px;
}
.bio{
  position: relative;
  border: 5px solid red;
  border-radius: 10px;
  top: 20%;
  left: 10%;
  height: 300px;
  padding: 10px 10px 10px 10px;
  width: 500px;
  text-align: left;
}
.biotext{
  position: fixed;
  top: 12%;
  margin-left: 39%;
  font-size: 24px;
  font-weight: 900;
  font-family: 'Comic Sans MS'
}
</style>
