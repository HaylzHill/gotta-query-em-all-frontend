<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Pokemons />
</template>

<script>
import Pokemons from "./Pokemons.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  },
  components: {
    Pokemons
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
