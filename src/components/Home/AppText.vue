<template>
  <a :href="`${urlSlug}`" :target="`${target}`">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="450"
      height="250"
      :x="svgCoords.x"
      :y="svgCoords.y"
      viewBox="0 0 280 115.4"
    >
      <g :class="`textnode text${num}`">
        <rect class="a" :width="`${width}`" height="21.39" />
        <rect class="b" y="25.4" width="280" height="56" />

        <text class="d" transform="translate(7.6 14)">
          <slot name="date">Jul 13, 2016</slot>
        </text>
        <text class="e" transform="translate(16.5 48.7)">
          <slot name="event">Something here</slot>
        </text>
        <text class="e" transform="translate(16.5 70)">
          <slot name="event2" />
        </text>
      </g>
    </svg>
  </a>
</template>

<script>
import coords from "@/components/coords.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { mapState } from "vuex";

gsap.registerPlugin(ScrollTrigger);

export default {
  computed: {
    ...mapState([
      "toggleConfig",
      "startConfig",
      "isAnimationDisabled",
      "viewportSize",
    ]),
  },
  mixins: [coords],
  props: {
    urlSlug: {
      type: String,
    },
    target: {
      type: String,
      default: "_blank",
    },
    width: {
      type: [Number, String],
      default: 60,
    },
    x: {
      type: [Number, String],
      default: 1200,
    },
    y: {
      type: [Number, String],
      default: 500,
    },
    xSmall: {
      type: [Number, String],
      default: 1200,
    },
    ySmall: {
      type: [Number, String],
      default: 500,
    },
    num: {
      type: [Number, String],
      default: 1,
    },
  },
  methods: {
    textEntrance() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.text${this.num}`,
            toggleActions: this.toggleConfig,
            start: this.startConfig,
          },
        })
        .fromTo(
          `.text${this.num}`,
          {
            duration: 1,
            y: 40,
            scale: 0.9,
            opacity: 0,
            transformOrigin: "50% 50%",
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "sine",
          }
        );
    },
  },
  mounted() {
    if (!this.isAnimationDisabled) {
      this.textEntrance();
    }
  },
};
</script>

<style lang="scss" scoped>
.a {
  fill: #0e1e25;
}

.b,
.d {
  fill: #fff;
}

.c {
  fill: #00dc9f;
}

.d {
  font-size: 10px;
}

.d,
.e,
.h {
  font-family: Roboto-Medium, Roboto;
  font-weight: 500;
}

.e {
  font-size: 15px;
}

.f {
  letter-spacing: -0.01em;
}

.g {
  letter-spacing: -0.01em;
}

.h {
  font-size: 13px;
}

.i {
  letter-spacing: -0.01em;
}
</style>
