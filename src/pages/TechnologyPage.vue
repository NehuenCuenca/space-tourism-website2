<template>
  <!-- <h1>technology PAGE</h1> -->
  <div id="technology-page-content">
    <div class="grid-technology">
      <span class="title"><span class="gray">03</span> SPACE LAUNCH 101</span>
      <SliderTechnology />
    </div>
  </div>
</template>

<script>
import SliderTechnology from "../components/SliderTechnology.vue";

export default {
  components: { SliderTechnology },
}
</script>

<style scoped>
#technology-page-content {
  min-height: 100vh;
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 5% 0;
  overflow: hidden;
}
.grid-technology {
  width: 80%;
  min-height: 65vh;
  color: white;
  display: grid;
  grid-template-columns: .2fr 1fr 1fr;
  grid-template-rows: 5rem 55vh;
  grid-template-areas:
    "title title title"
    "slider info-technology img-technology";
  gap: 0 5vw;
}

span.title {
  grid-area: title;
  font-family: var(--ff-sans-cond);
  text-align: start;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 3px;
}
span.title .gray{
  color: gray;
}
</style>
