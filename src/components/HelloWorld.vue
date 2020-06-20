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
import Pokemons from "./Pokemons.vue";
import Loading from "./Loading.vue";

export default {
  name: "HelloWorld",
  components: {
    Loading,
    Pokemons,
  },
};
</script>
