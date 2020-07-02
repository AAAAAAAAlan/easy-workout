<template>
  <div class="container">
    <exerciseCard 
      class="exercise-card" 
      v-for="exercise in exercises" 
      :key="exercise.icon" 
      :icon="exercise.icon" 
      :link="exercise.link"
    />
  </div>
</template>

<script>
import exerciseCard from '~/components/exerciseCard.vue'

export default {
  components: {
    exerciseCard,
  },

  data() {
    return {
      exercises: [
        {link: '/pullups', icon: 'https://img.icons8.com/ios-filled/100/000000/pullups.png'},
        {link: '/situps', icon: 'https://img.icons8.com/ios-glyphs/96/000000/sit-ups.png'},
        {link: '/pushups', icon: 'https://img.icons8.com/ios-filled/100/000000/pushups.png'}
      ]
  }
}
}
</script>

<style lang="stylus" scoped>

  .container
    user-select none
    max-height 100vh
    height 95vh
    display grid
    grid-template-rows repeat(3, auto)
    gap 30px

    .exercise-card
      cursor pointer
      user-select none
      -webkit-user-drag: none

</style>