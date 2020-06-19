<template>
  <p>{{ pokemons }}</p>
</template>

<script>
import { execute, makePromise } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

export default {
  name: "Pokemons",
  props: {},
  data() {
    return {
      pokemons: null,
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
          }
        }
      `,
      variables: {}, //optional
    };

    makePromise(execute(link, operation))
      .then((data) => (this.pokemons = data))
      .catch((error) => console.log(`received error ${error}`));
  },
};
</script>
