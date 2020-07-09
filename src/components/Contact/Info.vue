<template>
  <div class="col-md-5 address-container">
    <ul class="list-unstyled">
      <li>
        <span class="fa-icon">
          <i class="fa fa-phone" aria-hidden="true"></i>
        </span>
        {{config.phone}}
      </li>
      <li>
        <span class="fa-icon">
          <i class="fa fa-at" aria-hidden="true"></i>
        </span>
        {{config.email}}
      </li>
      <li>
        <span class="fa-icon">
          <i class="fa fa fa-map-marker" aria-hidden="true"></i>
        </span>
        {{config.location}}
      </li>
    </ul>
    <h3>Follow me on social networks</h3>
    <a
      :href="`http://www.facebook.com/${config.social && config.social.facebook ? config.social.facebook : '#' }`"
      title
      class="fa-icon"
    >
      <i class="fa fa-facebook"></i>
    </a>
    <a :href="`http://www.twitter.com/${config.social && config.social.twitter ? config.social.twitter : '#'}`" title class="fa-icon">
      <i class="fa fa-twitter"></i>
    </a>
    <a :href="`http://www.linkedin.com/${config.social && config.social.linkedin ? config.social.linkedin : '#'}`" title class="fa-icon">
      <i class="fa fa-linkedin"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: { config: Object }
};
</script>