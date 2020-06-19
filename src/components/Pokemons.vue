<template>
  <div id="wrapper">
    <Pokemon v-for="pokemon in pokemons" :pokemon="pokemon" />
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";
import { execute, makePromise } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

export default {
  name: "Pokemons",
  components: {
    Pokemon
  },
  props: {},
  data() {
    return {
      pokemons: null
    };
  },
  created() {
    const uri = "https://gotta-query-em-all.herokuapp.com/";
    const link = new HttpLink({ uri });

    const operation = {
      query: gql`
        query {
          pokemon {
            name
            imgSrc
          }
        }
      `,
      variables: {} //optional
    };

    makePromise(execute(link, operation))
      .then(data => {
        console.log(data.data.pokemon);
        return (this.pokemons = data.data.pokemon);
      })
      .catch(error => console.log(`received error ${error}`));
  }
};
</script>

<style scoped>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>>