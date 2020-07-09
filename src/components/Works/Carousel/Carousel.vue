<template>
  <div id="myCarousel" class="carousel slide projects-carousel">
    <CarouselList :config="config" />
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
    <a id="next" class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
  </div>
</template>

<script>
import CarouselList from "./CarouselList";

export default {
  name: "Carousel",
  components: { CarouselList  },
  props: {
    config: Object
  }
};
</script>