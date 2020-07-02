<template>
  <div class="section-container">
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2 section-container-spacer">
          <div class="text-center">
            <h1 class="h2">{{routerIndex}} : {{title}}</h1>
            <p>{{text}}</p>
          </div>
        </div>
        <div class="col-md-12">
          <carousel :config="projectsConfig" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import { worksConfig } from "@/env";
export default {
  name: "Works",
  data: () => ({
    text: worksConfig.text,
    projectsConfig: worksConfig.projectsConfig,
    title: worksConfig.show
  }),
  computed: {
    routerIndex() {
      return (worksConfig.index + 1).toString().padStart(2, "0");
    }
  },
  components: {
    Carousel
  }
};
</script>