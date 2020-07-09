<template>
  <div class="col-sm-4">
    <router-link :to="`/works/${config.key}`" title class="black-image-project-hover">
      <img
        @click="clicked"
        :src="require(`@/assets/images/${config.image ? config.image : 'work01-hover.jpg'}`)"
        class="img-responsive"
      />
    </router-link>
    <div class="card-container card-container-lg">
      <h4>{{(config.index + 1).toString().padStart(3,"0")}}/{{(config.length).toString().padStart(3,"0")}}</h4>
      <h3>{{config.title}}</h3>
      <p>{{config.description}}</p>
      <router-link :to="`/works/${config.key}`" title class="btn btn-default">
        <span @click="clicked">Discover</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselElement",
  methods: {
    clicked() {
      window.scrollTo(0, 0);
    }
  },
  props: { config: Object }
};
</script>