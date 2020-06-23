<template>
  <div id="wrapper">
    <div class="profile">
      <ul>
        <li>Name: {{ pokemon.name }}</li>
        <li v-if="pokemon.resistances">
          Resistances: 
          <ul>
            <li
              v-for="resistance in pokemon.resistances"
              :key="resistance"
            >
              {{ resistance }}
            </li>
          </ul>
        </li>
        <li v-if="pokemon.weaknesses">
          Weaknesses: 
          <ul>
            <li
              v-for="weakness in pokemon.weaknesses"
              :key="weakness"
            >
              {{ weakness }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <img :src="pokemon.imgSrc">
  </div>
</template>

<script>
import useQuery from "../use/query";

export default {
  name: "Pokemons",
  components: {},
  props: {
    pokemonName: { type: String, default: "" },
  },
  
  async setup(props) {
    const {
      pokemonByName: pokemon = {},
    } = await useQuery(`{ pokemonByName(name: "${props.pokemonName}") { name weaknesses resistances imgSrc } }`);

    return { pokemon };
  },
};
</script>

<style scoped>
  #wrapper {
    display: flex;
    margin: 80px auto 15vh;
    max-width: 1200px;
    justify-content: center;
  }
  #wrapper img {
    height: auto;
    align-self: flex-start;
  }
  .profile {
    min-width: 400px;
    text-align: left;
  }
  .profile li {
    list-style: none;
  }
  .profile > ul > li {
    margin-bottom: 30px;
    padding-left: 20px;
  }
</style>
