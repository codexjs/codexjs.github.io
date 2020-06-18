<template>
  <div
    class="hero-full-container background-image-container white-text-container"
    :style="{ 'background-image': `url(${require('@/assets/images/space.jpg')})` }"
  >
    <dynamic-text-vue :config="textConfig" />
  </div>
</template>

<script>
import DynamicTextVue from "@/components/home/DynamicText.vue";
import env from "@/env";

export default {
  name: "Home",
  components: {
    DynamicTextVue
  },
  data:()=>({
    textConfig: env.textConfig
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
