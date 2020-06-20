<template>
  <div class="nes-container with-title nice-width">
    <img
      src="../assets/pikachu-walking.gif"
      alt="Pikachu walking"
      height="50"
    >
    <div>
      <p class="title">
        Loading...
      </p>
      <p>{{ msg }}</p>
      <progress
        class="nes-progress is-primary"
        max="100"
        :value="percentage"
      />
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";
import useLoading from "../use/loading";

const funMessage = (percentage) => {
  if (percentage.value < 30) {
    return "Calling Professor Oak...";
  }

  if (percentage.value < 60) {
    return "Receiving Pokemon data...";
  }

  return "Sending to Pokedex...";
};

export default {
  name: "Loading",
  setup() {
    const msg = ref("");
    const { percentage } = useLoading();

    watchEffect(() => {
      msg.value = funMessage(percentage);
    });

    return { msg, percentage };
  },
};
</script>

<style scoped>
.nice-width {
  margin: auto;
  max-width: 500px;
}
</style>
