<script>
export default {
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<template>
  <nav class="nav" :class="{ open: navOpen }">
    <ul class="list">
      <li>
        <a href="/home"> Home</a>
      </li>
      <li><a href="/certifications">Certifications</a></li>
      <li><a href="/skills-and-aspirations">Skills/Aspirations</a></li>
    </ul>
    <button class="handle" @click="toggleNav">
      <span v-if="!navOpen">v</span>
      <span v-else>^</span>
    </button>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: fixed;
  display: flex;
  align-items: center;
  top: -30px;
  left: 0;
  right: 0;
  flex-direction: column;
  transition: top 0.5s ease;
  z-index: 1;
}

ul {
  height: 2rem;
  background-color: rgb(25, 45, 56);
  display: flex;
  list-style: none;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 5px 10px;
  border-radius: 0 0 8px 8px;
  width: 40vw;
}

a {
  color: #fff;
  text-decoration: none;
}

button {
  width: 20px;
  background: rgb(25, 45, 56);
  border: none;
  color: white;
  font-weight: 700;
  z-index: 1;
  border-radius: 0 0 8px 8px;
  cursor: pointer;
}

li {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media only screen and(max-width: 820px) {
  .list {
    width: 100vw;
    flex-direction: column;
    height: 80px;
  }

  .nav {
    top: -80px;
  }
}

.open {
  top: 0;
}
</style>
