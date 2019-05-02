<template>
    <div>
      <div class="dropdown" :class="{'is-active': dropdown.isActive}">
        <div class="dropdown-trigger">
          <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="dropdown.isActive = !dropdown.isActive" @blur="dropdownBlur">
            <span>{{dropdown.options[$store.state.posts.commentsSortOption]}}</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a class="dropdown-item" v-for="(option, index) in dropdown.options" @click="changeDropdownOption(index)">{{option}}</a>
          </div>
        </div>
      </div>
      <br><br>
      <comment v-for="comment in sortedComments" :comment="comment"></comment>
    </div>
</template>

<script>
  import Comment from "./Comment";
  export default {
    name: "CommentList",
    components: {Comment},
    props: ['comments'],
    data() {
      return {
        dropdown: {
          isActive: false,
          options: [
            "Likes",
            "Newest",
            "Oldest"
          ]
        }
      }
    },
    methods: {
      dropdownBlur() {
        let dropdown = this.dropdown;
        // Wait for dropdown item click events to fire, before deactivating dropdown
        setTimeout(function(){ dropdown.isActive = false; }, 200);
      },
      changeDropdownOption(index) {
        this.$store.dispatch('posts/setCommentsSortOption', index);
      },
    },
    computed: {
      sortedComments() {
        switch(this.$store.state.posts.commentsSortOption) {
          case 0:
            return this.$store.getters['posts/commentsSortedByMostLikes'];
            break;
          case 1:
            return this.$store.getters['posts/commentsSortedByNewest'];
            break;
          case 2:
            return this.$store.getters['posts/commentsSortedByOldest'];
            break;
        }
      }
    }
  }
</script>

<style scoped>

</style>
