import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import LoginNew from "../views/LoginNew.vue";
import Home from "../views/Home.vue";
import SearchCandidates from "../views/SearchCandidates/SearchCandidates.vue";

// import LoginValidate from "../views/LoginValidate.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "search-candidates",
        component: SearchCandidates,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
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
