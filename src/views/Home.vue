<template>
  <Suspense>
    <template #default>
      <Pokemons />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Pokemons from "../components/Pokemons.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "HelloWorld",
  components: {
    Loading,
    Pokemons,
  },
};
</script>
