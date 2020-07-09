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
    <editor :config="menuConfig" :content="config" @changed="changed" />
  </div>
</template>

<script>
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
    config: contactConfig.config,
    menuConfig: [
      {
        show: "Contact"
      },
      {
        show: "Phone",
        children: "phone"
      },
      {
        show: "Email",
        children: "email"
      },
      {
        show: "Location",
        children: "location"
      },
      {
        show: "Social",
        children: "social"
      }
    ]
  }),
  methods: {
    changed(value, children) {
      if (children) {
        if (!this.config[children]) {
          this.config = { [children]: value, ...this.config };
        } else {
          this.config[children] = value;
        }
      } else {
        this.config = value;
      }
    }
  }
};
</script>
