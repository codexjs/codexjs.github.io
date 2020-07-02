<template>
  <div id="app">
    <app-header :menu="templateConfig" />
    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import { templateConfig } from "@/env";

export default {
  name: "App",
  components: {
    AppHeader
  },
  data: () => ({
    templateConfig: templateConfig
  })
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
