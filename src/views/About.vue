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
                      v-if="image"
                      :src="require(`@/assets/images/${image}`)"
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
  </div>
</template>

<script>
import { aboutConfig } from "@/env";
import DynamicText from "@/components/DynamicText.js";

export default {
  name: "About",
  components: { DynamicText },
  data: () => ({
    title: aboutConfig.show,
    content: aboutConfig.content,
    image: aboutConfig.image
    // title1: aboutConfig.title1,
    // text1: aboutConfig.text1,
    // title2: aboutConfig.title2,
    // text2: aboutConfig.text2,
    // title3: aboutConfig.title3,
    // text3: aboutConfig.text3
  }),
  computed: {
    routerIndex() {
      console.log(this.content);
      return (aboutConfig.index + 1).toString().padStart(2, "0");
    }
  }
};
</script>