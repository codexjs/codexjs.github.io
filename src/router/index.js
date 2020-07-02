import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
  templateConfig
} from "@/env";

Vue.use(VueRouter);

let dynamicRoutes = [];

const menuKeys = Object.keys(templateConfig);

for (let i = 0; i < menuKeys.length; i++) {
  let key = menuKeys[i];
  let value = templateConfig[menuKeys[i]];
  templateConfig[key]["index"] = i;

  if (i == 0) {
    dynamicRoutes.push({
      path: '/',
      name: value.componentName,
      component: Home // Home || lazy import
    });
  } else {
    dynamicRoutes.push({
      path: `/${key}`,
      name: value.componentName,
      component: () => import(`../views/${value.componentName}.vue`)
    });
  }

  if (i == menuKeys.length - 1) {
    dynamicRoutes.push({
      path: "*",
      redirect: '/'
    });
  }
}

const routes = dynamicRoutes;

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router