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
      name: value.name,
      component: Home // Home || lazy import
    });
  } else {
    let newRoute = {
      path: `${value.path || "/" + key}`,
      name: value.name,
      component: () => import(`../views/${value.name}.vue`)
    };
    if (value.children) {
      newRoute.children = []
      for(let j = 0; j < value.children.length; j++){
        newRoute.children.push({
          path: `${value.children[j].path || key}`,
          name: value.children[j].name,
          component: () => import(`../views/${value.children[j].name}.vue`)
        });
      }
    }
    dynamicRoutes.push(newRoute);
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