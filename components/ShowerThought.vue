<template>
  <div class="container-fluid">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body content_size">
        <div class="  height_max">
          <h1 class="title centerFlex height_max">
            People think depressed people are lazy, when in actuality they are putting significantly more effort into
            the
            simple act of living than any content person
          </h1>

        </div>

        <div class="columns spaceBetweenFlex">
        <span class="icon is-large">
          <span class="fa-stack fa-lg">
            <i class="fas fa-chevron-left fa-stack-1x"></i>
            <!--<i class="fas fa-ban fa-stack-2x has-text-danger"></i>-->
          </span>
        </span>
          <span class="icon is-large">
          <span class="fa-stack fa-lg">
            <i class="far fa-star"></i>
            <strong>2</strong>
          </span>
        </span>

          <span class="icon is-large">
          <span class="fa-stack fa-lg">
            <i class="fas fa-chevron-right fa-stack-1x"></i>
            <!--<i class="fas fa-ban fa-stack-2x has-text-danger"></i>-->
          </span>
        </span>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
    export default {
        name: "ShowerThought"
    }
</script>

<style scoped>
  section {

    height: calc(100vh - 3.25rem);
  }

  .content_size {
    height: 100%;
  }

  .height_max {
    height: 100%;
  }

  .centerFlex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spaceBetweenFlex {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .flex_right_bottom {
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
  }

</style>
