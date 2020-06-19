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
            <li v-for="(config, k, index) in menu" :key="k">
              <router-link
                :class="$route.name == config.componentName ? 'active' : null"
                :to="k"
                title
              >
                <span
                  @click="menuClicked"
                >{{(index + 1).toString().padStart(2,"0")}} : {{config.show}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    // menu: Array
    menu: Object
  },
  data: () => ({
    home: true
  }),
  methods: {
    menuClicked() {
      document.getElementById("menuButton").click();
    }
  },
  watch: {
    $route(to, from) {
      if (to.fullPath != "/") {
        this.home = false;
      } else {
        this.home = true;
      }
    }
  }
};
</script>