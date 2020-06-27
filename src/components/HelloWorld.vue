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
import { defineComponent } from "vue";
import Pokemons from "./Pokemons.vue";
import Loading from "./Loading.vue";

export default defineComponent({
  name: "HelloWorld",
  components: {
    Loading,
    Pokemons,
  },
});
</script>
