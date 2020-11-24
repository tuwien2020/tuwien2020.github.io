import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";
import { version } from "./../package.json";
import LandingPage from "./pages/LandingPage.vue";

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [{ path: "/", component: LandingPage }];

if (import.meta.env.PROD) {
  console.log(`${name} - ${version}`);
}

createApp(App)
  .use(
    createRouter({
      history: createWebHashHistory(),
      routes: routes,
    })
  )
  .mount("#app");
