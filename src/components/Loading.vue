<template>
  <div class="nes-container with-title loading-container">
    <p class="title">
      Loading...
    </p>
    <img
      alt="Pikachu walking"
      class="pika"
      height="50"
      src="../assets/pikachu-walking.gif"
      width="50"
    >
    <p>{{ msg }}</p>
    <progress
      class="nes-progress is-primary"
      max="100"
      :value="percentage"
    />
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
.loading-container {
  margin: 5vh auto 0;
  max-width: 500px;
  text-align: center;
}

.pika {
  margin: 1rem 0 2.5rem;
}
</style>
