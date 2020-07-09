<template>
  <div
    class="btn btn-default floating"
    :class="{floatOpen: status, floatingWhite: white}"
    style="padding: 0px !important; max-height: 50em;"
  >
    <div
      style="display: flex;"
      :style="menuShow ?  {'justify-content': 'space-around'} : {'justify-content': 'space-between'}"
    >
      <span v-show="!menuShow" @click="menuShow = !menuShow" style="padding: 1em">🡄</span>
      <span @click="close" style="padding: 1em">{{status ? 'x' : 'Edit'}}</span>
    </div>

    <div v-show="status" style="height: 100%: overflow-y: auto">
      <span v-show="error" class="errorMsg">Not valid Json format</span>
      <div style="max-height: 50em;  overflow-y: auto;">
        <div
          v-show="menuShow"
          class="menu"
          v-for="(v, i) in config"
          :key="i"
          @click="menuClicked(v)"
        >{{v.show}}</div>
      </div>
      <div v-show="!menuShow" style="height: 100%">
        <textarea
          v-model="value"
          type="text"
          class="form-control jsonText"
          placeholder="Edit"
          @keypress="keyPress"
        />
        <div style="display:flex; justify-content: space-between">
          <span @click="contentFormat" style="padding: 1em">
            <i class="fa fa-reorder"></i>
          </span>
          <span @click="contentEdited" style="padding: 1em">Edit</span>
          <span @click="contentReset" style="padding: 1em">
            <i class="fa fa-refresh"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deepSet, deepGet } from "@/components/Deep";

export default {
  name: "Editor",
  props: {
    config: [Object, Array],
    white: Boolean
  },
  data: () => ({
    error: false,
    status: false,
    menuShow: true,
    target: null,
    value: ""
  }),
  // mounted() {
  //   this.config.forEach(res => {
  //     let value = res.children
  //       ? deepGet(res.content, res.children)
  //       : res.content;
  //     res.object = typeof value == "object";
  //     if (res.object) res.origin = { ...value };
  //     else res.origin = origin;
  //   });
  // },
  methods: {
    close() {
      this.status = !this.status;
      this.menuShow = true;
      if (this.error) this.contentReset();
    },
    contentFormat() {
      try {
        if (this.target.object)
          this.value = JSON.stringify(JSON.parse(this.value), null, 2);
        this.error = false;
      } catch {
        this.error = true;
      }
    },
    // setTarget(value) {
    //   // In order to don't loose the reference;
    //   if (this.target.children)
    //     deepSet(this.target.content, this.target.children, value);
    //   else {
    //     let keyArray = { ...this.target.content };
    //     Object.keys(value).forEach(res => {
    //       this.target.content[res] = value[res];
    //       delete keyArray[res];
    //     });
    //     Object.keys(keyArray).forEach(res => {
    //       this.target.content[res] = null;
    //       delete this.target.content[res];
    //     });
    //   }
    // },
    contentEdited() {
      try {
        let value;
        if (this.target.object) value = JSON.parse(this.value);
        else value = this.value;

        this.status = !this.status;
        this.menuShow = true;
        this.error = false;

        // this.setTarget(value);
        this.$emit("changed", this.target, value);
      } catch (err) {
        this.error = true;
      }
    },
    contentReset() {
      if (this.target.object)
        this.value = JSON.stringify(this.target.origin, null, 2);
      else this.value = this.target.origin;

      this.error = false;

      // this.setTarget(this.target.origin);
      this.$emit("changed", this.target, this.target.origin);
    },
    keyPress(event) {
      if (event.which == 10) this.contentEdited();
    },
    menuClicked(v) {
      if (v.content) {
        let value = v.children ? deepGet(v.content, v.children) : v.content;
        if (v.object) value = JSON.stringify(value, null, 2);
        this.value = value;
      }
      this.target = v;
      this.menuShow = !this.menuShow;
    }
  },
  watch: {
    config: {
      immediate: true,
      handler(newValue) {
        newValue.forEach(res => {
          let value = res.children
            ? deepGet(res.content, res.children)
            : res.content;
          res.object = typeof value == "object";
          if (res.object) res.origin = { ...value };
          else res.origin = origin;
        });
      }
    }
  }
};
</script>

<style>
.floating {
  position: fixed;
  bottom: 4em;
  right: 5em;
}
.floatingWhite {
  color: white;
  border-color: white;
}
.floatingWhite:hover {
  background: none !important;
  border-color: white !important;
}

.floatOpen {
  width: 35em;
}

.jsonText {
  /* height: 86% !important; */
  height: 40em !important;
  width: 95%;
  resize: none;
  margin: 1em auto 0em;
}
.errorMsg {
  padding: 1em;
  color: red;
}

.menu {
  background: none !important;
  border-color: white;
  width: 20%;
  margin: 1em auto;
  text-align: center;
  border: 1px solid;
  width: 95%;
  font-size: 1.5em;
}

.menu:hover {
  border-color: black;
  color: black;
  background-color: white !important;
}
</style>