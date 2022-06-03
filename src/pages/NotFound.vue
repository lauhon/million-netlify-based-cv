<template>
  <div id="app">
    Not Found
  </div>
</template>
<script>
import AppFooter from "@/components/AppFooter.vue";
import AppGithubCorner from "@/components/AppGithubCorner.vue";

export default {
  components: {
    AppGithubCorner,
    AppFooter,
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
</style>

<style lang="scss" scoped></style>
