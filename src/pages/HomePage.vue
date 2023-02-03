<template>
  <div id="home-page-content">
    <div class="grid-content">
      <div class="text">
        <span class="medium-text">So, you want to travel to</span>
        <span class="big-text">Space</span>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <router-link class="btn-explore" :to="{ name: 'Destination' }"
        >Explore</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#home-page-content {
  min-height: 100vh;
  background-image: url("../assets/home/background-home-desktop.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 5% 0;
}

.grid-content {
  width: 80%;
  height: auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto;
  grid-template-areas: "text btn";
  gap: 40%;
}

.text {
  color: white;
  user-select: none;
  grid-area: text;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "medium-text"
    "big-text"
    "paragraph";
}

.text .medium-text {
  grid-area: medium-text;
  font-size: 1.5rem;
  font-family: var(--ff-sans-cond);
  text-transform: uppercase;
  letter-spacing: 3px;
  justify-self: start;
  padding-bottom: 1rem;
}
.text .big-text {
  grid-area: big-text;
  font-family: var(--ff-serif);
  font-size: 7rem;
  text-transform: uppercase;
  letter-spacing: 1vw;
  padding-bottom: 2.5rem;
}
.text p {
  margin: 0;
  grid-area: paragraph;
  font-family: var(--ff-sans-normal);
  font-size: 1.1rem;
  justify-self: start;
  text-align: start;
}

.btn-explore {
  color: black;
  grid-area: btn;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  padding: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: var(--ff-serif);
  font-size: 1.8rem;
  font-weight: lighter;
  text-decoration: none;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: whitesmoke;
  align-self: flex-end;
  transition: all 0.5s ease;
}

a.btn-explore:hover {
  transform: scale(0.9);
}
a.btn-explore:visited {
  color: initial;
}
</style>
