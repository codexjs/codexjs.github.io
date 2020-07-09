<template>
  <div class="section-container">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <!-- <img src="@/assets/images/work001-01.jpg" class="img-responsive" alt /> -->
          <img
            :src="require(`@/assets/images/${config[$route.params.id].image ? config[$route.params.id].image : 'work001-01.jpg'}`)"
            class="img-responsive entryImage"
            alt
          />
          <div class="card-container">
            <div class="text-center">
              <h1
                class="h2"
              >{{$route.params.id.replace("work","").padStart(3,"0")}} : {{ config[$route.params.id].title }}</h1>
            </div>
            <DynamicText
              v-for="(element, i) in config[$route.params.id].content"
              :key="i"
              :type="element.type"
              :content="typeof element == 'string' ? element : element.content"
            />
            <!-- <p>Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies, nisl nunc pulvinar ligula, id sodales arcu sapien in nisi. Quisque libero enim, mattis non augue posuere, venenatis dapibus urna.</p>

            <blockquote>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."</p>
              <small class="pull-right">Irina Martin</small>
            </blockquote>-->
          </div>
        </div>

        <!-- <div class="col-md-8 col-md-offset-2 section-container-spacer">
          <div class="row">
            <div class="col-xs-12 col-md-6">
              <img src="@/assets/images/work001-02.jpg" class="img-responsive" alt />
              <p>Menphis skyline</p>
            </div>
            <div class="col-xs-12 col-md-6">
              <img src="@/assets/images/work001-03.jpg" class="img-responsive" alt />
              <p>Menphis skyline</p>
            </div>
          </div>
        </div>

        <div class="col-xs-12">
          <img src="@/assets/images/work001-04.jpg" class="img-responsive" alt />
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import DynamicText from "@/components/DynamicText.js";

export default {
  name: "Work",
  components: {
    DynamicText
  },
  props: {
    config: Object
  }
};
</script>

<style>
.entryImage {
  margin: 0px auto;
  object-fit: cover;
  width: 100%;
  height: 15em;
  filter: contrast(200%) grayscale(100%);
}
</style>