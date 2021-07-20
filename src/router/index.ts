import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../containers/Home.vue";
import Form from "../containers/Form.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
