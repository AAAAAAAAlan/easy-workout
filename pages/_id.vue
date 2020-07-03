<template>
  <div class="container">
    <h1 class="exercise-title text-center">{{`now you're doing ${$route.params.id}`}}</h1>
    <exerciseProgress :count="exerciseCount[$route.params.id]"/>
    <div class="text-center button">
      <v-btn @click="doExercise($route.params.id)" width="100%" x-large dark>DO EXERCISE</v-btn>
    </div>
  </div>
</template>

<script>
import exerciseProgress from '~/components/exerciseProgress.vue'
import { mapState } from 'vuex'

export default {
  components: {
    exerciseProgress,
  },

  computed: {
    ...mapState({
      exerciseCount: state => state.exerciseCount
    }),

  },

  methods: {
    doExercise(exercise) {
      this.$store.commit('addExercise', exercise)
    }
  },
  
}
</script>

<style lang="stylus">
.button
  margin-top 20px 

.exercise-title
  margin-bottom 20px
  text-transform uppercase
</style>