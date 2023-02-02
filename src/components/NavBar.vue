<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/crew">Crew</router-link>
    <router-link to="/destination">Destination</router-link>
    <router-link to="/technology">Technology</router-link>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
nav {
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3vw;
  width: 100vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav .router-link-exact-active{
  color: #42b983
}
</style>