<template>
  <header>
    <nav class="navbar navbar-fixed-top" :class="home ?  'navbar-inverse' : 'navbar-default'">
      <div class="container">
        <button
          id="menuButton"
          type="button"
          class="navbar-toggle collapsed"
          data-target="#navbar-collapse"
          data-toggle="collapse"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li v-for="(config, index) in menu" :key="index">
              <router-link
                :class="$route.fullPath == config.url ? 'active':null"
                :to="config.url"
                title
              >
                <span @click="menuClicked">0{{index + 1}} : {{config.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import $ from "jquery";

export default {
  name: "AppHeader",
  props: {
    menu: Array
  },
  data: () => ({
    home: true
  }),
  methods: {
    menuClicked() {
      document.getElementById("menuButton").click();
    }
    // navActivePage() {
    //   $('nav li a[href=".' + location.pathname + '"]').addClass("active");
    //   if (location.pathname == "/")
    //     $('nav li a[href="./index.html"]').addClass("active");
    // }
  },
  mounted() {
    // console.log(this.$router.currentRoute.fullPath != "/");
    // console.log(this.$route.fullPath);
    // this.navActivePage();
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
      console.log(to.fullPath);

      console.log(to.fullPath);
      if (to.fullPath != "/") {
        this.home = false;
      } else {
        this.home = true;
      }
    }
  }
};
</script>