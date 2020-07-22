<template>
  <div class="wrapper">
    <Pokemon
      v-for="pokemon in allPokemon"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";
import useQuery from "../use/query";

export default {
  name: "Pokemons",
  components: {
    Pokemon
  },
  props: {},
  async setup() {
    const {
      pokemon: allPokemon = [],
    } = await useQuery(`{ pokemon { name imgSrc } }`);

    return { allPokemon };
  },
};
</script>
