<template>
  <div>
    <div class="section-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <div class="section-container-spacer text-center">
              <h1 class="h2">{{routerIndex}} : {{title}}</h1>
            </div>
            <div class="row">
              <div class="col-md-10 col-md-offset-1">
                <div class="row">
                  <div class="col-xs-12 col-md-6">
                    <DynamicText
                      v-for="(element, i) in content"
                      :key="i"
                      :type="element.type"
                      :content="element.content || element"
                    />
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <img
                      :src="require(`@/assets/images/${ image  || 'profil.jpg'}`)"
                      class="img-responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <editor :config="menuConfig" :content="content" @changed="changed" />
  </div>
</template>

<script>
import { aboutConfig } from "@/env";

import DynamicText from "@/components/DynamicText.js";
import Editor from "@/components/Editor.vue";

export default {
  name: "About",
  components: { DynamicText, Editor },
  computed: {
    routerIndex() {
      return (aboutConfig.index + 1).toString().padStart(2, "0");
    }
  },
  data: () => ({
    title: aboutConfig.show,
    content: aboutConfig.content,
    image: aboutConfig.image,
    menuConfig: []
  }),
  watch: {
    content: {
      immediate: true,
      handler(newValue) {
        this.menuConfig = [{ show: "About me", content: newValue }];
        Object.keys(newValue).forEach(res => {
          let show = res.charAt(0).toUpperCase() + res.slice(1);
          this.menuConfig.push({
            show: show,
            children: res
          });
        });
      }
    }
  },
  methods: {
    changed(value, children) {
      if (children) {
        this.content[children] = value;
      } else {
        this.content = value;
      }
    }
  }
};
</script>