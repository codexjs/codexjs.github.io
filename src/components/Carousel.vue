<template>
  <div id="myCarousel" class="carousel slide projects-carousel">
    <div class="carousel-inner">
      <div v-for="(project,i) in config" :key="i" class="item" :class="{active: i == 0}">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="(n,j) in (config[i].length  >= 3 ? 3 : config[i].length)"
            :key="j"
          >
            <router-link :to="`/works/${config[i][j].url}`" title class="black-image-project-hover">
              <img :src="require(`@/assets/images/${config[i][j].image}`)" class="img-responsive" />
            </router-link>
            <div class="card-container card-container-lg">
              <h4>{{(i * 3 + j + 1).toString().padStart(3,"0")}}/{{(config.length * 3).toString().padStart(3,"0")}}</h4>
              <h3>{{config[i][j].title}}</h3>
              <p>{{config[i][j].content}}</p>
              <router-link :to="`/works/${config[i][j].url}`" title class="btn btn-default">Discover</router-link>
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
    config: Array
  }
};
</script>