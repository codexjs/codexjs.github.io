<template>
  <div class="section-container">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 section-container-spacer">
          <div class="text-center">
            <h1 class="h2">02 : Works</h1>
            <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere, venenatis dapibus urna.</p>
          </div>
        </div>
        <div class="col-md-12">
          <carousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import { menuTemplate } from "@/env";
export default {
  name: "Works",
  components: {
    Carousel
  },
  mounted() {
    console.log(menuTemplate, this.$route.path.replace("/", ""));
  }
};
</script>