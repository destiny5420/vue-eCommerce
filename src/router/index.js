import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/vRoot/index.vue";
import Login from "@/views/vLogin/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "vRoot",
    component: Root
  },
  {
    path: "/login",
    name: "vLogin",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
