<template>
  <ul id="list-technology">
    <li
      v-for="(tech, index) in technologies"
      :key="index"
      @click="onClickTechnology(index)"
      :class="index === indexActiveTechnology ? 'active' : ''"
    >
      {{ index + 1 }}
    </li>
  </ul>

  <div class="info-technology">
    <span class="sub-title">The terminology...</span>
    <span class="name-technology">{{ actualTechnology.name }}</span>
    <p class="description-technology">{{ actualTechnology.description }}</p>
  </div>

  <img
    :src="getImgUrl(actualTechnology.name)"
    :alt="actualTechnology.name"
    class="img-technology"
    draggable="false"
  />
</template>

<script>
export default {
  name: "SliderTechnologies",
  data() {
    return {
      technologies: [],
      actualTechnology: null,
      indexActiveTechnology: null,
    };
  },
  created() {
    this.getTechonologies();
    this.onClickTechnology(0);
  },
  methods: {
    getImgUrl(technology) {
      const nameFormated = technology.split(" ").join("-").toLowerCase();
      return require(`../assets/technology/image-${nameFormated}-portrait.jpg`);
    },
    getTechonologies() {
      const { technology } = require("../database/data.json");
      this.technologies = technology;
    },
    onClickTechnology(index) {
      this.actualTechnology = this.technologies[index];
      this.indexActiveTechnology = index;
    },
  },
};
</script>

<style scoped>
ul#list-technology {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  list-style-type: none;
  grid-area: slider;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 7vh;
}

ul#list-technology li {
  user-select: none;
  color: white;
  grid-area: btn;
  width: 5vw;
  height: 5vw;
  border: 1px solid white;
  border-radius: 50%;
  padding: 2rem;
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
  background-color: transparent;
  transition: all 0.5s ease;
}

ul#list-technology li.active, #list-technology li:hover {
  background-color: whitesmoke;
  color: black;
}

.info-technology {
  grid-area: info-technology;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.info-technology .sub-title {
  font-family: var(--ff-sans-cond);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1rem;
  margin-bottom: 1rem;  
}

.info-technology .name-technology {
  font-family: var(--ff-serif);
  text-transform: uppercase;
  font-size: 2.8rem;
}
.info-technology .description-technology {
  width: 70%;
  text-align: start;
  line-height: 4vh;
}

img.img-technology{
  max-width: 90%;
  object-fit: cover;
  object-position: center center ;
  justify-self: flex-end;
  align-self: center;
}
</style>
