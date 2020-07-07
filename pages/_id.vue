<template>
  <div class="container">

    <div class="container-top">
      <h1 class="exercise-title text-center">{{`now you're doing ${$route.params.id}`}}</h1>
      <exerciseProgress :count="exerciseCount[$route.params.id]"/>
      <div class="text-center button">
        <v-btn @click="doExercise($route.params.id)" width="100%" x-large dark>DO EXERCISE</v-btn>
      </div>
    </div>
    
    <div class="container-bottom">
      <v-list rounded class="list">    
        <v-subheader>FEED</v-subheader>
          <v-list-item
            class="list-item"
            v-for="(finishedExercise, i) in finishedExercises"
            :key="i"
          >
            {{ `YOU\'VE DONE 100 ${finishedExercise.exercise} ON ${finishedExercise.time}` }}
          </v-list-item>
      </v-list>
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

  data() {
    return {
      completedExercises: [],
    }
  },

  computed: {
    ...mapState({
      exerciseCount: state => state.exerciseCount,
      finishedExercises: state => state.finishedExercises
    }),
  },

  methods: {
    doExercise(exercise) {
      this.$store.commit('addExercise', exercise)
    },

    
  },
  
}
</script>

<style lang="stylus">


.button
  margin 20px 0

.exercise-title
  margin-bottom 20px
  text-transform uppercase

  @media screen and (max-width: 600px)
    font-size 15pt

  @media screen and (max-width: 320px)
    font-size 11pt

.list
  overflow-y scroll

.list-item
  text-transform uppercase

.container-top
  max-height 53h

.container-bottom
  max-height 47vh
  overflow-y scroll




</style>