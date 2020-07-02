<template>
  <div
    class="hero-full-container background-image-container white-text-container"
    :style="{ 'background-image': `url(${require('@/assets/images/space.jpg')})` }"
  >
    <dynamic-msg-vue :config="textConfig" />
  </div>
</template>

<script>
import DynamicMsgVue from "@/components/DynamicMsg.vue";
import { homeConfig } from "@/env";

export default {
  name: "Home",
  components: {
    DynamicMsgVue
  },
  data: () => ({
    textConfig: homeConfig.textConfig
  }),
  methods: {
    movingBackgroundImage() {
      var bg = document.querySelector(".hero-full-container");
      var windowWidth = window.innerWidth / 5;
      var windowHeight = window.innerHeight / 5;

      bg.addEventListener("mousemove", e => {
        var mouseX = e.clientX / windowWidth;
        var mouseY = e.clientY / windowHeight;

        bg.style.transform = `translate3d(-${mouseX * 1.5}px, -${mouseY *
          1.5}px, 0)`;
      });
    }
  },
  mounted() {
    this.movingBackgroundImage();
  }
};
</script>
