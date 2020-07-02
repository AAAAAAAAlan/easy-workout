<template>

  <v-card class="exercise-container" dark hover ripple nuxt :to="link">
      <img class="exercise" :src="icon">
  </v-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    link: {
      type: String
    }
  },
}
</script>

<style lang="stylus">
  img
    filter invert(1) !important
    pointer-events none
    user-select none

  .exercise
    padding 30px
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)

</style>