<template>
  <section class="hero is-success is-fullheight is-marginless">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head ">
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body ">
      <div class="container has-text-centered">
        <h1 class="title">
          One day the last human will be born
        </h1>
        <h4 class="subtitle text-left">
          Source
        </h4>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot m-4b">
      <div class="columns spaceBetweenFlex">
          <span class="icon is-large is-size-4-mobile">
            <span class="fa-stack fa-lg">
              <i class="fas fa-chevron-left fa-stack-1x"></i>
              <i class="fas fa-ban fa-stack-2x has-text-danger"></i>
            </span>
          </span>
        <span class="icon is-large is-size-4-mobile">

              <strong>2000</strong>

          </span>

        <span class="icon is-large is-size-4-mobile">
            <span class="fa-stack fa-lg">
              <i class="fas fa-chevron-right fa-stack-1x"></i>
              <i class="fas fa-ban fa-stack-2x has-text-danger"></i>
            </span>
          </span>
      </div>
    </div>
  </section>
</template>


<script>
  export default {
    name: "ShowerThought"
  }
</script>

<style scoped>


  .spaceBetweenFlex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .m-4b{
    margin-bottom: 4rem;
  }



</style>
