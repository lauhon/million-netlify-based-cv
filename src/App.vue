<template>
  <div id="app">
    <app-login-result-sticky v-if="user.number" />
    <app-animation-switch />
    <app-github-corner />

    <section class="intro-section">
      <app-header />
    </section>
    <div class="path-main-size">
    <svg  id="timeline" xmlns="http://www.w3.org/2000/svg" :viewBox="timelineAttributes.viewBox">
     
      <app-mobilepath />

      <app2016 />

    </svg>
    </div>

    <div class="disclaimer">
      <p>The Graphics and animations were mainly done by Netlify, their original sourcecode can be found in <a href="https://github.com/netlify/million-devs" target="_blank">their Repository</a></p>
  </div>
  </div>
</template>

<script>
import App2016 from "@/components/App2016.vue";
import AppAnimationSwitch from "@/components/AppAnimationSwitch.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppMobilepath from "@/components/AppMobilepath.vue";
import AppText from "@/components/AppText.vue";
//gsap
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { mapState } from "vuex";





gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    AppGithubCorner,
    AppMobilepath,
    AppHeader,
    AppText,
    App2016,
    AppAnimationSwitch
  },
  computed: {
    ...mapState(["viewportSize", "user", "isAnimationDisabled"]),
    timelineAttributes() {
      return {
        viewBox:
          this.viewportSize == "large"
            ? "0 -500 2000 8300"
            : "0 -500 600 18500",
      };
    },
  },
  mounted() {
    var mql = window.matchMedia("(max-width: 1000px)");

    const setViewportSize = (e) => {
      const viewportSize = e.matches ? "small" : "large";
      this.$store.commit("updateViewportState", viewportSize);
    };

    setViewportSize(mql);
    mql.addListener(setViewportSize);
  },
  watch: {
    isAnimationDisabled(newVal, oldVal) {
      ScrollTrigger.getAll().forEach((trigger) => {
        let animation = trigger.animation;
        if (newVal === true) {
          animation && animation.progress(1);
        } else {
          animation && animation.progress(0);
        }
      });
    },
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  scroll-padding: 10vh;
}

body {
  background: #ccc;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: -0.4px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  margin: 8px;
}

.intro-section {
  height: 100vh;
  width: 99%;
}

.path-main-size {
@media only screen and(max-width: 1000px) {
  height: 5250px;
}

  overflow: hidden;
  height: 120vw;
}

@media only screen and (max-width: 1000px) {
  #timeline {
    max-width: 600px;
    min-width: 500px;
    display: block;
    margin-top: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .svg-tree,
  .svg-bush,
  .svg-streetlamp,
  .timeline-path {
    display: none;
  }
}
</style>

<style lang="scss" scoped>
.cls-1 {
  fill: #999;
}

.disclaimer {
  margin-top: 50px;
  display: flex;
  justify-self: center;
  text-align: center;

  & > p {
  flex: 1

  }
  
}
</style>
