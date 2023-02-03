<template>
  <nav>
    <router-link
      v-for="({ name }, index) in routes"
      :key="index"
      :to="{ name }"
    >
      {{ "0" + index }} {{ name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      routes: [],
    };
  },
  created() {
    this.routes = this.$router.getRoutes().slice(0, 4);
  },
};
</script>

<style scoped>
nav {
  position: fixed;
  top: 5%;
  right: 0%;
  width: auto;
  padding: 2rem;
  padding-right: 8rem;
  padding-left: 6rem;
  background-color: rgba(169, 169, 169, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3vw;
  backdrop-filter: blur(10px);
}

nav a {
  font-family: var(--ff-sans-cond);
  font-size: 1.1rem;
  font-weight: lighter;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

nav .router-link-exact-active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 2rem;
}
</style>
