import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import {  BootstrapVue } from 'bootstrap-vue'
Vue.config.productionTip = false

new Vue({
  router,
  BootstrapVue,
  render: h => h(App)
}).$mount('#app')