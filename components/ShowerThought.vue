<template>
  <section class="hero is-fullheight is-marginless" :class="'is-'+this.color()">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head ">
    </div>
    <!-- Hero content: will be in the middle -->
    <div class="hero-body ">
      <div class="container has-text-centered">
        <h1 class="title">
          {{this.currentThought.title}}
        </h1>
        <h4 class="subtitle is-flex">
          <a target="_blank" rel="noopener noreferrer" :href="this.currentThought.link_url" class="is-link">Source </a>
        </h4>
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot m-4b">
      <div class="columns spaceBetweenFlex">
          <span class="icon is-large is-size-4-mobile" @click="loadPreviousPost">
            <span class="fa-stack fa-lg">
              <i class="fas fa-chevron-left fa-stack-1x"></i>
              <!--    <i class="fas fa-ban fa-stack-2x has-text-danger"></i>-->
            </span>
          </span>
        <span class="icon is-large is-size-4-mobile">

              <strong>{{this.currentThought.score}}</strong>
        </span>
        <span class="icon is-large is-size-4-mobile" @click="loadNextPost">
            <span class="fa-stack fa-lg">
              <i class="fas fa-chevron-right fa-stack-1x"></i>
              <!--<i class="fas fa-ban fa-stack-2x has-text-danger"></i>-->
            </span>
          </span>
      </div>
    </div>
  </section>
</template>


<script>

  export default {
    name: "ShowerThought",
    data() {
      return {
        colors: ['primary', 'link', 'info', 'success', 'warning', 'danger',],
        currentColor: '',
      }
    },
    created() {
      this.color();

    },
    beforeCreate() {
      this.$store.dispatch('thoughts/loadThought');
    },
    computed: {
      currentThought: {
        get() {
          return this.$store.state.thoughts.info;
        },
      },
      currentPageInfo: {
        get() {
          return this.$store.state.thoughts.pagination;
        }
      }
    },
    methods: {
      color() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
      },
      loadNextPost() {
        let current = this.currentPageInfo.current_page;
        let max = this.currentPageInfo.last_page;
        if (current === max) {
          return this.loadThought(1);
        }
        return this.loadThought(current + 1);

      },
      loadPreviousPost() {
        let current = this.currentPageInfo.current_page;
        let max = this.currentPageInfo.last_page;
        if (current <= 1) {
          return this.loadThought(max);
        }
        return this.loadThought(current - 1);

      },
      loadThought(page) {
        this.$store.dispatch('thoughts/loadNextThought', page);
        this.color();
      }
    }
  }
</script>

<style scoped>


  .spaceBetweenFlex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .m-4b {
    margin-bottom: 4rem;
  }

  .leftF {
    float: left;
  }


</style>
