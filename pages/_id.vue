<template>
  <div style="user-select: none" class="container">

    <div class="container-top">
      <h1 @click="debug" class="exercise-title text-center">{{`now you're doing ${$route.params.id}`}}</h1>
      <exerciseProgress :count="exerciseCount[$route.params.id]"/>
      <div class="text-center button">
        <v-btn @click="doExercise($route.params.id)" width="100%" x-large dark>DO EXERCISE</v-btn>
      </div>
    </div>

    <div class="container-bottom">
      <v-list rounded class="list">    
        <v-subheader>FEED</v-subheader>
          <v-list-item
            ripple
            class="list-item"
            v-for="(finishedExercise, i) in finishedExercises"
            :key="i"
            @click="selectFinishedExercise(i)"
          >
            {{ `YOU\'VE DONE 100 ${finishedExercise.exercise} ON ${finishedExercise.time}` }} 
          </v-list-item>
      </v-list>
    </div>

    <v-snackbar
      v-model="snackbar"
      >
      ARE U SURE YOU WANT TO DELETE THIS COMPLETED EXERCISE?

      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="deleteExercise()"
        >
          YES!
        </v-btn>
      </template>
    </v-snackbar>

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
      snackbar: false,
      text: 'snackbar'
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
      this.$store.commit('ADD_EXERCISE', exercise)
    },

    selectFinishedExercise(i) {
      this.snackbar = true
      this.$store.commit('SELECT_FINISHED_EXERCISE', i)
    },

    deleteExercise() {
      this.$store.commit('DELETE_FINISHED_EXERCISE')
      this.snackbar = false
    },

    debug() {
      this.$store.commit('DEBUG')
    }
  },
  
}
</script>

<style lang="stylus">

@media screen and (max-width: 600px)
  .exercise-title
    font-size 15pt
    margin-bottom 3px !important 

@media screen and (max-width: 320px)
  .exercise-title
    font-size 11pt



.container

  .container-top
    max-height 65vh

    .exercise-title
      margin-bottom 20px
      text-transform uppercase

    .button
      margin 20px 0

  .container-bottom
    // max-height 35vh
    // padding-bottom 80%
    overflow-y scroll

    .list
      overflow-y scroll
      // overflow hidden

      .list-item
        text-transform uppercase



</style>