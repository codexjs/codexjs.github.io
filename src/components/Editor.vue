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
      <span v-show="!menuShow" @click="back" style="padding: 1em">🡄</span>
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
export default {
  name: "Editor",
  props: {
    config: [Object, Array],
    content: {
      type: [Object, Array],
      defaut: {}
    },
    white: Boolean
  },
  data: () => ({
    error: false,
    status: false,
    menuShow: true,
    target: null,
    value: ""
  }),
  mounted() {
    this.origin = { ...this.content };
  },
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
    contentEdited() {
      try {
        let value;
        if (this.target.object) value = JSON.parse(this.value);
        else value = this.value;

        this.status = !this.status;
        this.menuShow = true;
        this.error = false;

        this.$emit("changed", value, this.target.children);
      } catch (err) {
        this.error = true;
      }
    },
    contentReset() {
      this.error = false;
      if (this.target.children) {
        let origin = this.origin[this.target.children];
        if (this.target.object) this.value = JSON.stringify(origin, null, 2);
        else this.value = origin;
        this.$emit("changed", origin, this.target.children);
      } else {
        if (this.target.object)
          this.value = JSON.stringify(this.origin, null, 2);
        else this.value = this.origin;
        this.$emit("changed", this.origin);
      }
    },
    keyPress(event) {
      if (event.which == 10) this.contentEdited();
    },
    menuClicked(v) {
      if (this.content) {
        let value = v.children ? this.content[v.children] : this.content;
        v.object = typeof value == "object";
        if (v.object) value = JSON.stringify(value, null, 2);
        this.value = value;
      }
      this.target = v;
      this.menuShow = !this.menuShow;
    },
    back() {
      this.menuShow = !this.menuShow;
      this.error = false;
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