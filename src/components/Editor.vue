<template>
  <div
    class="btn btn-default floating"
    :class="{floatOpen: status, floatingWhite: white, floatError: error}"
    style="padding: 1em 0 !important"
  >
    <span @click="close" style="padding: 1em">{{status ? 'x' : 'Edit'}}</span>

    <div v-show="status" style="height: 100%">
      <span v-show="error" class="errorMsg">Not valid Json format</span>

      <textarea
        v-model="value"
        type="text"
        class="form-control jsonText"
        placeholder="Edit"
        @keypress="keyTest"
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
</template>

<script>
export default {
  name: "Editor",
  props: {
    config: [Object, Array],
    white: Boolean
  },
  data: () => ({
    error: false,
    status: false,
    origin: "",
    value: ""
  }),
  mounted() {
    if (this.config) {
      this.value = JSON.stringify(this.config, null, 2);
      this.origin = this.value;
    }
  },
  methods: {
    close() {
      this.status = !this.status;
      if (this.error) this.contentReset();
    },
    contentFormat() {
      try {
        this.value = JSON.stringify(JSON.parse(this.value), null, 2);
        this.error = false;
      } catch {
        this.error = true;
      }
    },
    contentEdited() {
      try {
        let configObj = JSON.parse(this.value);
        this.value = JSON.stringify(configObj, null, 2);
        this.status = !this.status;
        this.error = false;
        this.$emit("changed", configObj);
      } catch {
        this.error = true;
      }
    },
    contentReset() {
      let configObj = JSON.parse(this.origin);
      this.value = this.origin;
      this.error = false;
      this.$emit("changed", configObj);
    },
    keyTest(event) {
      if (event.which == 10) this.contentEdited();
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
  height: 45em;
  width: 35em;
}

.floatError {
  height: 55em;
}

.jsonText {
  height: 86% !important;
  width: 95%;
  resize: none;
  margin: 1em auto 0em;
}
.errorMsg {
  padding: 1em;
  color: red;
}
</style>