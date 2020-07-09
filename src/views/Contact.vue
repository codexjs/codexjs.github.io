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
                  <Form />
                  <Info :config="config" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <editor :config="menuConfig" @changed="changed" />
  </div>
</template>

<script>
import { deepSet } from "@/libraries/Deep";
import { contactConfig } from "@/env";

import Editor from "@/components/Editor.vue";
import Form from "@/components/Contact/Form.vue";
import Info from "@/components/Contact/Info.vue";

export default {
  components: { Editor, Form, Info },
  computed: {
    routerIndex() {
      return (contactConfig.index + 1).toString().padStart(2, "0");
    }
  },
  data: () => ({
    title: contactConfig.show,
    config: contactConfig.config
  }),
  watch: {
    config: {
      immediate: true,
      handler(newValue) {
        this.menuConfig = [{ show: "Contact", content: newValue }];
        Object.keys(newValue).forEach(res => {
          let show = res.charAt(0).toUpperCase() + res.slice(1);
          this.menuConfig.push({
            show: show,
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
        deepSet(this.config, target.children, value);
      } else {
        this.config = value;
      }
    }
  }
};
</script>
