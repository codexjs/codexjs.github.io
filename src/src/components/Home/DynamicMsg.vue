<template>
  <div class="container">
    <div class="row col-xs-12 hero-full-wrapper text-content" style="width: fit-content">
      <div class="col-xs-12">
        <div class="hero-full-wrapper">
          <div class="text-content">
            <h1>
              {{config.firstMssg}}
              <br />
              <span id="typed"></span>
              <br />
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  name: "DynamicMsg",
  props: {
    config: {
      type: Object,
      default: () => ({
        firstMssg: "Hi,",
        mssgArray: ["Welcome"]
      })
    }
  },
  mounted() {
    this.type();
  },
  methods: {
    type(strings) {
      this.typed = new Typed("#typed", {
        strings: this.config.mssgArray,
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity
      });
      this.config.mssgArray = this.typed.strings;
    }
  },
  watch: {
    "config.mssgArray"(v) {
      if (!v || v.length == 0) v = [""];
      let strings = v;
      this.typed.arrayPos = 0;
      this.typed.strings = strings;
      for (let i = 0; i < strings.length; i++) {
        this.typed.sequence[i] = `${i}`;
      }
    }
  }
};
</script>