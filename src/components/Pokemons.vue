<template>
  <div id="wrapper">
    <Pokemon
      v-for="pokemon in allPokemon"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pokemon from "./Pokemon.vue";
import pokemons from "../use/queries/pokemons";

export default defineComponent({
  name: "Pokemons",
  components: {
    Pokemon
  },
  props: {},
  async setup() {
    const allPokemon = await pokemons();
    return { allPokemon };
  },
});
</script>

<style scoped>
  #wrapper {
    display: grid;
    grid-gap: 70px 20px;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: space-evenly;
    margin: 80px auto 15vh;
    max-width: 1200px;
  }
</style>
