<template>
  <div
    class="hero-full-container background-image-container white-text-container"
    :style="{ 'background-image': `url(${require('@/assets/images/space.jpg')})` }"
  >
    <dynamic-msg-vue :config="textConfig" />
    <editor white :config="menuConfig" :content="textConfig" @changed="changed" />
  </div>
</template>

<script>
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
  watch: {
    textConfig: {
      immediate: true,
      handler(newValue) {
        this.menuConfig = [
          {
            show: "Home"
          },
          {
            show: "First Message",
            children: "firstMssg"
          },
          {
            show: "Second Message",
            children: "mssgArray"
          }
        ];
      }
    }
  },
  methods: {
    changed(value, children) {
      if (children) {
        if (!this.textConfig[children]) {
          this.textConfig = { [children]: value, ...this.textConfig };
        } else {
          this.textConfig[children] = value;
        }
      } else {
        this.textConfig = value;
      }
    }
  }
};
</script>