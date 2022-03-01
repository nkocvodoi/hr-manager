import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
// import LoginValidate from "../views/LoginValidate.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: LoginValidate,
  //   // component: () =>
  //   //   import(/* webpackChunkName: "about" */ "../views/LoginValidate.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
