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
                <form action class="reveal-content">
                  <div class="row">
                    <div class="col-md-7">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          name="_replyto"
                          placeholder="Email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          id="subject"
                          name="message"
                          placeholder="Subject"
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          rows="5"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <button type="submit" class="btn btn-default btn-lg">Send</button>
                    </div>
                    <div class="col-md-5 address-container">
                      <ul class="list-unstyled">
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                          </span>
                          {{config.phone}}
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa-at" aria-hidden="true"></i>
                          </span>
                          {{config.email}}
                        </li>
                        <li>
                          <span class="fa-icon">
                            <i class="fa fa fa-map-marker" aria-hidden="true"></i>
                          </span>
                          {{config.location}}
                        </li>
                      </ul>
                      <h3>Follow me on social networks</h3>
                      <a
                        :href="`http://www.facebook.com/${config.social.facebook || '#'}`"
                        title
                        class="fa-icon"
                      >
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a
                        :href="`http://www.twitter.com/${config.social.twitter|| '#'}`"
                        title
                        class="fa-icon"
                      >
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a
                        :href="`http://www.linkedin.com/${config.social.linkedin|| '#'}`"
                        title
                        class="fa-icon"
                      >
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </form>
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

export default {
  components: {Editor},
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
