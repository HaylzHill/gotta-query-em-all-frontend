<template>
  <div>
    <p>{{pokemon.name}}</p>
    <img :src="pokemon.imgSrc" />
  </div>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokemon: {
      name: { type: String, default: "" },
      imgSrc: { type: String, default: "" },
      type: Object,
      default: null
    }
  }
};
</script>