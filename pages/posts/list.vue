<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <button class="button" @click="newPost">Add</button>
      <pagination :pagination="$store.state.posts.pagination" @paging="loadPage" :delta="1">
        <list-table @edit="edit" @delete="remove" :objects="$store.state.posts.list" :keys="tableKeys" :actions="actions"></list-table>
      </pagination>
      <modal v-if="modalActive" :modal="editModal">
        <post-form></post-form>
      </modal>
    </div>
  </div>
</template>

<script>
    import ListTable from "../../components/listTable";
    import Pagination from "../../components/pagination";
    import Modal from "../../components/modal";
    import Post from "../../components/post";
    import PostForm from "../../components/forms/post";
    export default {
        name: "list",
      layout: 'signedIn',
      components: {PostForm, Modal, Pagination, ListTable},
      mounted() {
        console.log(this.$store);
      },
      data(){
          return {
            tableKeys: [
              {key: 'id', title: 'Id'},
              {key: 'title', title: 'Title'},
              {key: 'created_at', title: 'Creation date'}
              ],
            actions: [{title:'Edit', color:'is-primary'}, {title:'Delete', color:'is-danger'}],
          }
      },
      created() {
        this.$store.dispatch('posts/loadPostPage', 1);
      },
      methods: {
        loadPage(page) {
          this.$store.dispatch('posts/loadPostPage', page);
        },
        edit(id){
          this.$store.dispatch('posts/toggleModal', 'edit');
          this.$store.dispatch('posts/setModalData', {id:id, modal:'edit'});
        },
        remove(id){
          this.$store.dispatch('posts/deletePost', id);

        },
        newPost(){
          this.$store.dispatch('posts/toggleModal', 'edit');
          this.$store.dispatch('posts/setModalData', {modal:'edit'});
        }
      },
      computed: {
          modalActive(){
            return this.$store.state.posts.modal.edit.active;
          },
        editModal(){
          return this.$store.state.posts.modal.edit;
        }
      }
    }
</script>

<style scoped>

</style>
