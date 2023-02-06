<template>
  <template v-if="actualCrewMate">
    <div class="crewMate-img">
      <img :src="getImgUrl(actualCrewMate.name)" :alt="actualCrewMate.name" draggable="false" />
    </div>

    <div class="info-crewMate">
      <span class="crewMate-role">{{ actualCrewMate.role }}</span>
      <span class="crewMate-name">{{ actualCrewMate.name }}</span>
      <p class="crewMate-bio">{{ actualCrewMate.bio }}</p>

      <ul id="list-crewMates">
        <li
          v-for="(crewMate, index) in crew"
          :key="index"
          @click="onClickCrewMate(index)"
          :class="index === indexActiveCrewMate ? 'active' : ''"
        ></li>
      </ul>
    </div>
  </template>
</template>

<script>
export default {
  name: "SliderCrew",
  data() {
    return {
      crew: [],
      actualCrewMate: null,
      indexActiveCrewMate: null,
    };
  },
  created() {
    this.getCrew();
    this.onClickCrewMate(0);
  },
  methods: {
    getCrew() {
      const { crew } = require("../database/data.json");
      this.crew = crew;
    },
    onClickCrewMate(index) {
      this.actualCrewMate = this.crew[index];
      this.indexActiveCrewMate = index;
    },
    getImgUrl(crewMate) {
      const nameFormated = crewMate.split(" ").join("-").toLowerCase();
      return require(`../assets/crew/image-${nameFormated}.png`);
    },
  },
};
</script>

<style scoped>
.crewMate-img {
  grid-area: crew;
  display: grid;
  justify-items: center;
  justify-content: center;
}
.crewMate-img img {
  max-width: 70%;
  transition: all .5s ease;
  filter: drop-shadow(2px 4px 8px grey); 
}

.crewMate-img img:hover {
  transform: scale(1.2);
  filter: drop-shadow(2px 4px 8px black);
}

.info-crewMate {
  grid-area: info-crew;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
}

.crewMate-role {
  color: grey;
  padding-bottom: .2rem;
  font-family: var(--ff-serif);
  font-size: 2rem;
  text-transform: uppercase;
}

.crewMate-name {
  padding-bottom: 1rem;
  font-family: var(--ff-serif);
  font-size: 2.5rem;
  text-transform: uppercase;
  text-align: start;
}

p.crewMate-bio { 
  /* font-family: var(--ff-sans-cond); */
  width: 80%;
  margin: 0;
  text-align: justify;
  padding-bottom: 6rem;
}

.info-crewMate ul#list-crewMates {
  width: 100%;
  margin: 0;
  padding-top: ;
  list-style-type: disc;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 3vw;
}

ul#list-crewMates li {
  cursor: pointer;
  font-size: 3rem;
  color: gray;
}

#list-crewMates li.active {
  color: white;
}
</style>
