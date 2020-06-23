<template>
  <Suspense>
    <template #default>
      <h1>{{ $route.params.name }}'s profile</h1>
      <Pokemon :pokemon-name="`${$route.params.name}`" />
    </template>
    <template #fallback>
      <Loading />
    </template>
  </Suspense>
</template>

<script>
import Pokemon from "../components/Pokemon.vue";
import Loading from "../components/Loading.vue";


export default {
  name: "HelloWorld",
  components: {
    Loading,
    Pokemon,
  },
};

</script>
