<template>
  <div id="app">
    <app-header :menu="menuTemplate" />
    <router-view />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
  </div>
</template>

<script>
import AppHeader from "./components/app/AppHeader.vue";
import env from "@/env";

export default {
  name: "App",
  components: {
    AppHeader
  },
  data: () => ({
    menuTemplate: env.menuTemplate
  })
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
