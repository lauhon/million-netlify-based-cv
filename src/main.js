import Vue from "vue";
import App from "./pages/App.vue";
import Certifications from "./pages/Certifications.vue";
import NotFound from "./pages/NotFound.vue";
import SkillsAndAspirations from "./pages/SkillsAndAspirations.vue";
import store from "./store";

const routes = {
  "/": App,
  "/home": App,
  "/certifications": Certifications,
  "/skills-and-aspirations": SkillsAndAspirations,
};

Vue.config.productionTip = false;

new Vue({
  store,
  el: "#app",
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
}).$mount("#app");
