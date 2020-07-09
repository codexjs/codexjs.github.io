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
import { deepSet } from "@/libraries/Deep";
import { homeConfig, templateConfig } from "@/env";

import Editor from "@/components/Editor.vue";
import DynamicMsgVue from "@/components/Home/DynamicMsg.vue";

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
  // mounted() {
  // this.movingBackgroundImage();
  // }
  watch: {
    textConfig: {
      immediate: true,
      handler(newValue) {
        let menu = ["First Message", "Second Message"];
        let keys = Object.keys(newValue);
        this.menuConfig = [{ show: "Home", content: newValue }];
        menu.forEach((res, i) => {
          this.menuConfig.push({
            show: res,
            content: newValue,
            children: [keys[i]]
          });
        });
      }
    }
  },
  methods: {
    changed(target, value) {
      if (target.children) deepSet(this.textConfig, target.children, value);
      else {
        this.textConfig = value;
      }
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
  }
};
</script>