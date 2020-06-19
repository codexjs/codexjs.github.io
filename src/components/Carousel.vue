<template>
  <div id="myCarousel" class="carousel slide projects-carousel">
    <div class="carousel-inner">
      <div v-for="(project,i) in projectsConfig" :key="i" class="item" :class="{active: i == 0}">
        <div class="row">
          <div
            class="col-sm-4"
            v-for="(n,j) in (projectsConfig[i].length  >= 3 ? 3 : projectsConfig[i].length)"
            :key="j"
          >
            <router-link
              :to="`/works/${projectsConfig[i][j].url}`"
              title
              class="black-image-project-hover"
            >
              <img
                :src="require(`@/assets/images/${projectsConfig[i][j].image}`)"
                class="img-responsive"
              />
            </router-link>
            <div class="card-container card-container-lg">
              <h4>{{(j + 1).toString().padStart(3,"0")}}/{{(projectsConfig.length * 3).toString().padStart(3,"0")}}</h4>
              <h3>{{projectsConfig[i][j].title}}</h3>
              <p>{{projectsConfig[i][j].content}}</p>
              <router-link
                :to="`/works/${projectsConfig[i][j].url}`"
                title
                class="btn btn-default"
              >Discover</router-link>
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
  data: () => ({
    projectsConfig: [
      // O(n)
      [
        {
          title: "Project 1",
          content:
            "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
          image: "work01-hover.jpg",
          url: "work01"
        },
        {
          title: "Project 2",
          content:
            "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
          image: "work02-hover.jpg",
          url: "work02"
        },
        {
          title: "Project 3",
          content:
            "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
          image: "work03-hover.jpg",
          url: "work03"
        }
      ],
      [
        {
          title: "Project 1",
          content:
            "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
          image: "work01-hover.jpg",
          url: "work01"
        },
        {
          title: "Project 2",
          content:
            "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
          image: "work02-hover.jpg",
          url: "work02"
        },
        {
          title: "Project 3",
          content:
            "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
          image: "work03-hover.jpg",
          url: "work03"
        }
      ],
      [
        {
          title: "Project 1",
          content:
            "Proin pharetra metus id iaculis dignissim. In aliquet lorem ut ex ullamcorper.",
          image: "work01-hover.jpg",
          url: "work01"
        },
        {
          title: "Project 2",
          content:
            "Fusce sed hendrerit augue, a rhoncus velit. In non lorem mattis, tempor sem sit amet.",
          image: "work02-hover.jpg",
          url: "work02"
        },
        {
          title: "Project 3",
          content:
            "Nulla facilisi. Vivamus vestibulum, elit in scelerisque ultricies.",
          image: "work03-hover.jpg",
          url: "work03"
        }
      ]
    ]
  })
};
</script>