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
          <carousel :config="projectsConfig" />
        </div>
      </div>
    </div>
    <editor :config="menuConfig" @changed="changed" />
  </div>
</template>

<script>
import { deepSet } from "@/libraries/Deep";
import { worksConfig, projectsConfig } from "@/env";

import Carousel from "@/components/Works/Carousel/Carousel.vue";
import Editor from "@/components/Editor.vue";

export default {
  name: "Works",
  components: {
    Carousel,
    Editor
  },
  beforeRouteEnter(to, from, next) {
    let id = to.params.id;
    id && !worksConfig.projectsConfig[id] ? next("/works") : next(true);
  },
  beforeRouteUpdate(to, from, next) {
    let id = to.params.id;
    id && !this.projectsConfig[id] ? next("/works") : next(true);
  },
  computed: {
    routerIndex() {
      return (worksConfig.index + 1).toString().padStart(2, "0");
    }
  },
  data: () => ({
    text: worksConfig.text,
    menuConfig: [],
    projectsConfig: worksConfig.projectsConfig,
    name: worksConfig.name,
    title: worksConfig.show
  }),
  watch: {
    projectsConfig: {
      immediate: true,
      handler(newValue) {
        this.menuConfig = [{ show: "Projects", content: newValue }];
        Object.keys(newValue).forEach(res => {
          this.menuConfig.push({
            show: newValue[res].title,
            content: newValue,
            children: [res]
          });
        });
      }
    }
  },
  methods: {
    changed(target, value) {
      if (target.children) {
        deepSet(this.projectsConfig, target.children, value);
      } else {
        this.projectsConfig = value;
        if (this.$route.path != "/works") this.$router.push({ path: "/works" });
      }
    }
  }
};
</script>