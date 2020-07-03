<template>
  <div class="section-container">
    <div class="container">
      <div class="row">
        <router-view :config="projectsConfig"></router-view>
        <div v-if="$route.name == name" class="col-sm-8 col-sm-offset-2 section-container-spacer">
          <div class="text-center">
            <h1 class="h2">{{routerIndex}} : {{title}}</h1>
            <p>{{text}}</p>
          </div>
        </div>
        <div class="col-md-12">
          <!-- <carousel :loop="projectsIds" :config="projectsConfig" /> -->
          <carousel :config="projectsConfig" />
        </div>
      </div>
    </div>
    <editor :config="projectsConfig" @changed="changed" />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Editor from "@/components/Editor.vue";

import { worksConfig } from "@/env";
export default {
  name: "Works",
  components: {
    Carousel,
    Editor
  },
  data: () => ({
    text: worksConfig.text,
    projectsConfig: worksConfig.projectsConfig,
    name: worksConfig.name,
    title: worksConfig.show
  }),
  computed: {
    routerIndex() {
      return (worksConfig.index + 1).toString().padStart(2, "0");
    }
  },
  methods: {
    changed(v) {
      this.projectsConfig = v;
    }
  }
};
</script>