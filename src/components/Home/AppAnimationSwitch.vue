<template>
  <div class="animation-switch" :class="animtoggle">
    <span id="animation-state">
      <span v-if="isAnimationDisabled">Animations are Disabled:</span>
      <span v-else>Animations are Enabled:</span>
    </span>
    <label class="switch">
      <input
        aria-labelledby="animation-state"
        @click="animToggleStore"
        type="checkbox"
        :checked="!isAnimationDisabled"
      />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isAnimationDisabled", "user"]),
    animtoggle() {
      return {
        toggleloggedin: this.user.number,
        toggleloggedout: !this.user.number,
      };
    },
  },
  methods: {
    animToggleStore() {
      this.$store.commit("updateAnimationState");
    },
  },
};
</script>

<style lang="scss" scoped>
span {
  font-weight: normal;
}

.animation-switch {
  margin-top: 30px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 8px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #555;
  transition: 0.4s all ease;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s all ease;
}

input:checked + .slider {
  background-color: #238b5f;
}

input:focus + .slider {
  box-shadow: 0 0 1px #238b5f;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
