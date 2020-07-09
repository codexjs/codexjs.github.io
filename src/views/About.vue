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
    <editor :config="menuConfig" />
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
    image: aboutConfig.image,
    menuConfig: [
      {
        show: "About me",
        content: aboutConfig.content
      },
      {
        show: "Title1",
        children: ["title1"],
        content: aboutConfig.content
      },
      {
        show: "Text1",
        children: ["text1"],
        content: aboutConfig.content
      },
      {
        show: "Title2",
        children: ["title2"],
        content: aboutConfig.content
      },
      {
        show: "Text2",
        children: ["text2"],
        content: aboutConfig.content
      },
      {
        show: "Title3",
        children: ["title3"],
        content: aboutConfig.content
      },
      {
        show: "Title3",
        children: ["text3"],
        content: aboutConfig.content
      }
    ]
  }),
  beforeMount() {
    // this.menuConfig.push({ show: "Test", content: this.content });
  },
  computed: {
    routerIndex() {
      return (aboutConfig.index + 1).toString().padStart(2, "0");
    }
  }
};
</script>

<style scoped>
/* @media (max-width: 768px) {
  .floating {
    color: white;
    border-color: white;
  }
  .section-container {
    padding: 30px 0;
  }
} */
</style>
