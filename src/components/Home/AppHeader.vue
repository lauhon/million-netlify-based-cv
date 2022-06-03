<template>
  <header>
    <section class="parent" ref="parent">
      <div class="heading">
        <h1>Laurenz Honauer</h1>
      </div>
      <div class="intro">
        <h2>Curriculum Vitae</h2>
        <p>
          Hi, my name is Laurenz and this is my Homepage. It is meant to act as
          a CV so let me introduce myself.
        </p>
        <p>
          Since 2017 I'm writing Software in my spare time or professionally.
          Mostly I have been in the Web-Dev Universe. I gathered lots of
          experience in the biggest Web Frameworks like Angular and React. With
          Development of Rest-API's in Java and NodeJS and some fidgeting with
          Native Mobile Code and Rust, i think I can call myself a Fullstack
          Developer.
        </p>
        <p>
          If I applied at your Company and you are reading this on a PDF. For
          the cooler experience, please check this out on
          <a href="https://laurenzhonauer.com">my Website</a>
        </p>
      </div>
      <div class="mlogo">
        <app-million margin-top="-100px" />
      </div>
    </section>
    <app-scrolldown />
  </header>
</template>

<script>
import AppMillion from "@/components/Home/AppMillion.vue";
import AppScrolldown from "@/components/Home/AppScrolldown.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
  components: {
    AppMillion,
    AppScrolldown,
  },
};
</script>

<style lang="scss" scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  grid-column-gap: 40px;
  padding: 5vh 10vw;
  line-height: 1.8;

  @media only screen and(min-width: 1001px) {
    row-gap: 20px;
  }
}

a[href],
:visited {
  color: inherit;
  font-weight: 700;
}

.heading {
  grid-area: 1 / 1 / 2 / 3;
  text-align: center;
}
.mlogo {
  grid-area: 2 / 2 / 3 / 2;
  overflow: hidden;
  max-height: 40vh;
  margin-top: 25px;
}
.intro {
  grid-area: 2 / 1 / 3 / 2;
}

@media only screen and (min-width: 950px) {
  .mlogo {
    padding-top: 80px;
  }
}

@media only screen and (max-width: 1100px) {
  .parent {
    padding: 5vh 5vw;
  }
}

@media only screen and (max-width: 950px) {
  .parent {
    grid-template-columns: 1fr !important;
    grid-row-gap: 20px;
    grid-column-gap: 0 !important;
    grid-template-rows: none;
  }

  .heading {
    grid-area: 1 / 1 / 2 / 2;
  }
  .mlogo {
    grid-area: 3 / 1 / 3 / 2;
  }
  .intro {
    grid-area: 2 / 1 / 3 / 2;
  }
}

p {
  font-weight: normal;
}

h1 {
  font-size: 3.5em;
  font-size: clamp(2.5em, 6vw, 5em);
  margin: 0.25em 10px 0.5em;
  line-height: 1.4;
  font-family: Roboto;
}
</style>
