import Vue from "vue";
import NotFound from "./pages/NotFound.vue";
import routes from "./routes";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
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
