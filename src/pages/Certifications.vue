<template>
  <div id="app">
    <app-navigation></app-navigation>
    <app-github-corner />

    <div class="heading">
      <h1>Completed Certifications</h1>
    </div>
    <app-cert-list></app-cert-list>
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";
import AppCertList from "@/components/Certifications/AppCertList.vue";
import AppNavigation from "@/components/AppNavigation.vue";
export default {
  components: {
    AppGithubCorner,
    AppFooter,
    AppCertList,
    AppNavigation,
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
h1 {
  font-size: 3.5em;
  font-size: clamp(2.5em, 6vw, 5em);
  margin: 0.25em 10px 0.5em;
  line-height: 1.4;
  font-family: Roboto;
}
</style>

<style lang="scss" scoped>
.heading {
  text-align: center;
  margin-top: 80px;
}
</style>
