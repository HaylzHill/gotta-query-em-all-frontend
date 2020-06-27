<template>
  <div class="pokemon">
    <p>{{ pokemon.name }}</p>
    <img :src="pokemon.imgSrc">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pokemon",
  props: {
    pokemon: {
      name: { type: String, default: "" },
      imgSrc: { type: String, default: "" },
      type: Object,
      default: null
    }
  }
});
</script>

<style scoped>
  .pokemon img {
    width: 100%;
  }
  .pokemon:hover {
    transition: 0.1s ease transform;
    transform: scale(1.05);
  }
</style>
