import Vue from "vue";
import VueRouter from "vue-router";
import Root from "@/views/vRoot/index.vue";
import Home from "@/views/vHome/index.vue";
import Login from "@/views/vLogin/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/home"
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/",
    name: "vRoot",
    component: Root,
    children: [
      {
        path: "home",
        name: "vHome",
        component: Home
      }
    ]
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
