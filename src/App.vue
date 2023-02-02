<template>
  <NavBar />
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    NavBar: defineAsyncComponent( () => import( /* webpackChunkName: "NavBar" */ '@/components/NavBar.vue') ),
  }
}
</script>

<style> 
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&family=Bellefair&family=Barlow:wght@400;700&display=swap');

:root {
  /* font-families */
    --ff-serif: "Bellefair", serif;
    --ff-sans-cond: "Barlow Condensed", sans-serif;
    --ff-sans-normal: "Barlow", sans-serif;
}

html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

html{
    box-sizing: border-box;
    font-family: sans-serif;
}

*, *:before, *:after {
    box-sizing: inherit;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  background-color: mintcream;
  width: 100vw;
  min-height: 100vh;
}
</style>
