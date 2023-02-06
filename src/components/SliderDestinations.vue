<template>
  <template v-if="actualDestination">
    <div class="destination-img">
      <img
        :src="getImgUrl(actualDestination.name)"
        :alt="actualDestination.name"
        draggable="false"
      />
    </div>

    <div class="info-destination">
      <ul id="list-destinations">
        <li
          v-for="(destination, index) in destinations"
          :key="index"
          @click="onClickDestination(index)"
          :class="index === indexActiveDestination ? 'active' : ''"
        >
          {{ destination.name }}
        </li>
      </ul>

      <span class="destination-name">{{ actualDestination.name }}</span>

      <p>{{ actualDestination.description }}</p>

      <div class="travel-data">
        <div class="avg-distance">
          <span>AVG. DISTANCE</span>
          <span>{{ actualDestination.distance }}</span>
        </div>

        <div class="travel-time">
          <span>EST. TRAVEL TIME</span>
          <span>{{ actualDestination.travel }}</span>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "SliderDestinations",
  data() {
    return {
      destinations: [],
      actualDestination: null,
      indexActiveDestination: null,
    };
  },
  created() {
    this.getDestinations();
    this.onClickDestination(0);
  },
  methods: {
    getDestinations() {
      const { destinations } = require("../database/data.json");
      this.destinations = destinations;
    },
    onClickDestination(index) {
      this.actualDestination = this.destinations[index];
      this.indexActiveDestination = index;
    },
    getImgUrl(destination) {
      return require(`../assets/destination/image-${destination.toLowerCase()}.png`);
    },
  },
};
</script>

<style scoped>
.destination-img {
  grid-area: destination;
  display: grid;
  align-items: center;
  justify-items: center;
}
.destination-img img {
  max-width: 60%;
  height: auto;
  animation: rotation 100s infinite linear;
}

.info-destination {
  grid-area: info-destination;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.info-destination ul#list-destinations {
  width: 100%;
  margin: 0;
  padding: 0 0 2.6rem 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 2vw;
}

ul#list-destinations li {
  font-family: var(--ff-sans-cond);
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
}

#list-destinations li.active {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 10px;
}

.info-destination .destination-name {
  font-family: var(--ff-serif);
  font-size: 3rem;
  text-transform: uppercase;
  padding-bottom: 3vh;
}
.info-destination p {
  font-family: var(--ff-sans-normal);
  width: 65%;
  text-align: start;
  padding-bottom: 3rem;
}
.info-destination .travel-data {
  font-family: var(--ff-serif);
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  column-gap: 5vw;
}

.travel-data > * {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.travel-data div span:nth-child(1) {
  font-family: var(--ff-sans-cond);
  font-size: 14px;
  letter-spacing: 2.5px;
}
.travel-data div span:nth-child(2) {
  font-size: 1.8rem;
}


@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
