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
                      :content="element.content"
                    />
                  </div>
                  <div class="col-xs-12 col-md-6">
                    <img
                      :src="require(`@/assets/images/${ image  || 'profil.jpg'}`)"
                      class="img-responsive"
                    />
                    <!-- <img src="@/assets/images/profil.jpg" class="img-responsive" /> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <editor :config="content" @changed="changed" />
  </div>
</template>

<script>
import { aboutConfig } from "@/env";
import DynamicText from "@/components/DynamicText.js";
import Editor from "@/components/Editor.vue";

export default {
  name: "About",
  components: { DynamicText, Editor },
  data: () => ({
    title: aboutConfig.show,
    content: aboutConfig.content,
    image: aboutConfig.image
  }),
  methods: {
    changed(v) {
      this.content = v;
    }
  },
  computed: {
    routerIndex() {
      return (aboutConfig.index + 1).toString().padStart(2, "0");
    }
  }
};
</script>

<style scoped>
@media (max-width: 768px) {
  .floating {
    color: white;
    border-color: white;
  }
  .section-container {
    padding: 30px 0;
  }
}
</style>