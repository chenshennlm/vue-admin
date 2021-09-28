import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import Login from "../views/Login/index.vue";
// import About from "../views/About.vue";

const routes = [
  {
    // path: "/",
    // name: "Home",
    // component:import("./views/Home.vue"),
    path: "/",
    // name: "Index",
    // component: Home,
    redirect:"login"
  },
  {
    path: "/login",
    name: "Login",
     component: () => import("../views/Login/index.vue"),
  },
 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
