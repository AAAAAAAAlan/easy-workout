<template>
  <v-container class="app">
    <div class="container-top">
      <h1 class="exercise-title text-center">{{`now you're doing ${$route.params.id}`}}</h1>
      <exerciseProgress :count="exerciseCount[$route.params.id]"/>

      <v-menu dark>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="goal-selection text-center"
            width="100%"
            style="margin-top: 20px"
            dark
            v-bind="attrs"
            v-on="on"
          >
            {{ `THE GOAL IS ${selectedGoal} ${$route.params.id}` }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="setGoal(item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="text-center button">
        <v-btn @click="doExercise($route.params.id)" width="100%" x-large dark>DO EXERCISE</v-btn>
      </div>
    </div>

    <div fill-height class="container-bottom">
      <v-list rounded class="list">    
        <v-subheader>FEED</v-subheader>
          <v-list-item
            ripple
            class="list-item"
            v-for="(finishedExercise, i) in finishedExercises"
            :key="i"
            @click="selectFinishedExercise(i)"
          >
            {{ `YOU\'VE DONE ${finishedExercise.selectedGoal} ${finishedExercise.exercise} ON ${finishedExercise.time}` }} 
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
  </v-container>
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
      snackbar: false,
      items: [
        { title: 20 },
        { title: 30 },
        { title: 50 },
        { title: 100 },
      ],
    }
  },

  computed: {
    ...mapState({
      exerciseCount: state => state.exerciseCount,
      finishedExercises: state => state.finishedExercises,
      selectedGoal: state => state.selectedGoal
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
    
    setGoal(x) {
      this.$store.commit('SET_GOAL', x)
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

.app
  user-select none
  .container-top
    max-height 65vh
    .exercise-title
      margin-bottom 20px
      text-transform uppercase
    .button
      margin 20px 0

  .container-bottom
    .goal-selection
      margin-top 20px
    .list
      overflow-y scroll
      max-height 40vh
      font-size 15px
      .list-item
        text-transform uppercase
</style>