<template>
  <div class="container">
    <div class="row col-xs-12 hero-full-wrapper text-content">
      <div class="col-xs-12">
        <div class="hero-full-wrapper">
          <div class="text-content">
            <h1>
              {{config.firstMssg}}
              <br />
              <span id="typed-strings">
                <span v-for="mssg in config.mssgArray" :key="mssg">{{mssg}}</span>
              </span>
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
  name: "DynamicText",
  props: {
    config: {
      type: Object,
      default: () => ({
        firstMssg: "Hi,",
        mssgArray: ["I'm a Front End Developer"]
      })
    }
  },
  mounted() {
    this.type();
  },
  methods: {
    type(strings) {
      var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 100,
        backSpeed: 20,
        loop: true,
        loopCount: Infinity
      });
    }
  }
};
</script>