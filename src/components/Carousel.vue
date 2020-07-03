<template>
  <div id="myCarousel" class="carousel slide projects-carousel">
    <div class="carousel-inner">
      <div v-for="(project,i) in loop" :key="i" class="item" :class="{active: i == 0}">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="(n,j) in (loop[i].length  >= 3 ? 3 : loop[i].length)"
            :key="j"
          >
            <router-link :to="`/works/${loop[i][j]}`" title class="black-image-project-hover">
              <img
                :src="require(`@/assets/images/${config[loop[i][j]].image}`)"
                class="img-responsive"
              />
            </router-link>
            <div class="card-container card-container-lg">
              <h4>{{(i * 3 + j + 1).toString().padStart(3,"0")}}/{{(loop.length * 3).toString().padStart(3,"0")}}</h4>
              <h3>{{config[loop[i][j]].title}}</h3>
              <p>{{config[loop[i][j]].description}}</p>
              <router-link :to="`/works/${loop[i][j]}`" title class="btn btn-default">
                <span @click="clicked">Discover</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    config: Object
  },
  methods: {
    clicked() {
      window.scrollTo(0, 0);
    }
  },
  computed: {
    loop() {
      const projectsIds = [];
      let target = [];
      let counter = 0;
      Object.keys(this.config).forEach(key => {
        if (counter % 3 == 0) {
          target = [];
          projectsIds.push(target);
        }
        target.push(key);
        counter++;
      });
      return projectsIds;
    }
  }
};
</script>