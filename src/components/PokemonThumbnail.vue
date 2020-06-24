<template>
  <router-link
    :to="`/pokemon/${ pokemon.name }`"
    class="pokemon"
  >
    <p>{{ pokemon.name }}</p>
    <img :src="pokemon.imgSrc">
  </router-link>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokemon: {
      name: { type: String, default: "" },
      imgSrc: { type: String, default: "" },
      type: Object,
      default: null
    }
  }
};
</script>

<style scoped>
  .pokemon {
    color: inherit;
    text-decoration: none;
  }
  .pokemon img {
    width: 100%;
  }
  .pokemon:hover {
    transition: 0.1s ease transform;
    transform: scale(1.05);
  }
</style>
