import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./views/Home.vue";
import HelloWorld2 from "./views/Pokemon.vue";
const history = createWebHistory();
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/pokemon/:name", component: HelloWorld2 },
];
const router = createRouter({ history, routes });
export default router;
