<template>
  <div id="crew-page-content">
    <div class="grid-crew">
      <span class="title"> <span class="gray">02</span> Pick your crew</span>
      <SliderCrew />
    </div>
  </div>
</template>

<script>
import SliderCrew from '../components/SliderCrew.vue'

export default {
  name: 'CrewPage',
  components: { SliderCrew }
}
</script>

<style scoped>
#crew-page-content {
  min-height: 100vh;
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-position: center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
}
.grid-crew {
  width: 80%;
  min-height: 65vh;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-rows: 5rem 65vh;
  grid-template-areas:
    "title title"
    "info-crew crew";
  align-items: end;
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
