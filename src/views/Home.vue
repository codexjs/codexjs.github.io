<template>
  <div
    class="hero-full-container background-image-container white-text-container"
    :style="{ 'background-image': `url(${require('@/assets/images/space.jpg')})` }"
  >
    <dynamic-msg-vue :config="textConfig" />
    <editor white :config="menuConfig" @changed="changed" />
  </div>
</template>

<script>
import DynamicMsgVue from "@/components/DynamicMsg.vue";
import Editor from "@/components/Editor.vue";
import { homeConfig, templateConfig } from "@/env";
import { deepSet } from "@/components/Deep";

export default {
  name: "Home",
  components: {
    DynamicMsgVue,
    Editor
  },
  data: () => ({
    textConfig: homeConfig.textConfig,
    menuConfig: []
  }),
  mounted() {
    // Object.keys(templateConfig).forEach(res => {
    //   let template = templateConfig[res];
    //   if (template.show) {
    //     this.menuConfig.push({
    //       show: `${template.show} Menu`,
    //       children: ["show"],
    //       content: template
    //     });
    //   }
    // });
  },
  methods: {
    changed(target, value) {
      if (target.children) deepSet(this.textConfig, target.children, value);
      else {
        this.textConfig = value;
      }
      // deepSet(target.content, target.children, value);
    }
    // movingBackgroundImage() {
    //   var bg = document.querySelector(".hero-full-container");
    //   var windowWidth = window.innerWidth / 5;
    //   var windowHeight = window.innerHeight / 5;
    //   bg.addEventListener("mousemove", e => {
    //     var mouseX = e.clientX / windowWidth;
    //     var mouseY = e.clientY / windowHeight;
    //     bg.style.transform = `translate3d(-${mouseX * 1.5}px, -${mouseY *
    //       1.5}px, 0)`;
    //   });
    // }
  },
  // mounted() {
  // this.movingBackgroundImage();
  // }
  watch: {
    textConfig: {
      immediate: true,
      handler(newValue) {
        let menu = ["First Message", "Second Message"];
        let keys = Object.keys(newValue);
        this.menuConfig = []
        menu.forEach((res, i) => {
          this.menuConfig.push({
            show: res,
            content: newValue,
            children: [keys[i]]
          });
        });
        this.menuConfig.push({ show: "Config", content: newValue });
      }
    }
  }
};
</script>
<style>
</style>