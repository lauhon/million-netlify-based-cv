import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleConfig: `play pause none pause`,
    startConfig: `center 90%`,
    isAnimationDisabled: false,
    viewportSize: "large",
    user: {
      name: "",
      number: "",
    },
  },
  mutations: {
    updateViewportState(state, size) {
      state.viewportSize = size;
    },
    updateAnimationState(state) {
      state.isAnimationDisabled = !state.isAnimationDisabled;
    },
    login(state, payload) {
      state.user.name = payload.name;
      state.user.number = payload.number;
    },
  },
  getters: {
    milestone: function(state) {
      let ids = {
        jet: 0, // but really 7656
        redirect: 12400,
        github: 18112, // out of order?
        letsencrypt: 25000,
        seed: 31226,
        deploypreview: 33769,
        deploybutton: 44319,
        twodoto: 74179,
        splittesting: 82983,
        auditlogs: 90554,
        smashing: 128546,
        netlifycms: 135652,
        functions: 183658,
        drop: 269271,
        jamstack1: 308307,
        largemedia: 395967,
        "statue-dev": 435285,
        analyticsuk: 520824,
        book: 542309,
        "golden-gate": 600000,
        docs: 625040,
        virtual: 750000,
        "build-plugins": 948344,
        million: 1000000,
      };

      let userNumber = parseInt(
        ("" + state.user.number).replace(/[^\d]*/g, ""),
        10
      );
      let lastId = 0;
      for (let idStr in ids) {
        if (userNumber < ids[idStr]) {
          return lastId;
        }
        lastId = idStr;
      }
      return false;
    },
    milestoneCoords(state, getters) {
      let coords = {
        jet: { x: 1050, y: -350 },
        redirect: { x: 450, y: 250 },
        github: { x: 450, y: 250 },
        letsencrypt: { x: 450, y: 250 },
        seed: { x: 700, y: 850 },
        deploypreview: { x: 420, y: 1200 },
        deploybutton: { x: 350, y: 1700 },
        twodoto: { x: 850, y: 1680 },
        splittesting: { x: 1130, y: 2020 },
        auditlogs: { x: 730, y: 2200 },
        smashing: { x: 200, y: 2430 },
        netlifycms: { x: 700, y: 2900 },
        functions: { x: 250, y: 3250 },
        drop: { x: 380, y: 3650 },
        jamstack1: { x: 890, y: 3870 },
        largemedia: { x: 100, y: 4200 },
        "statue-dev": { x: 700, y: 4400 },
        analyticsuk: { x: 800, y: 5050 },
        book: { x: 1180, y: 4900 },
        "golden-gate": { x: 200, y: 5300 },
        docs: { x: 700, y: 5700 },
        virtual: { x: 1400, y: 5950 },
        "build-plugins": { x: 750, y: 6450 },
        million: { x: 750, y: 6800 },
      };

      if (coords[getters.milestone]) {
        return coords[getters.milestone];
      }
      return { x: -250, y: -1000 };
    },
  },
  actions: {},
  modules: {},
});
