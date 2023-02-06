<template>
  <!-- <h1>DESTINATION PAGE</h1> -->
  <div id="destination-page-content">
    <div class="grid-destination">
      <span class="title"><span class="gray">01</span> Pick your destination</span
      >
      <SliderDestinations />
    </div>
  </div>
</template>

<script>
import SliderDestinations from "../components/SliderDestinations.vue";

export default {
  components: { SliderDestinations },
};
</script>

<style scoped>
#destination-page-content {
  min-height: 100vh;
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 5% 0;
  overflow: hidden;
}
.grid-destination {
  width: 80%;
  min-height: 65vh;
  color: white;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 5rem auto;
  grid-template-areas:
    "title title"
    "destination info-destination";
}

span.title {
  grid-area: title;
  font-family: var(--ff-sans-cond);
  text-align: start;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 3px;
}
</style>
