  import moment from 'moment'

  export const state = () => ({

    exerciseCount: {
      pullups: 0,
      situps: 0,
      pushups: 0
    },

    finishedExercises: [],

    selectedExercise: null,

    selectedGoal: 100,
  })

  export const mutations = {
    ADD_EXERCISE (state, exercise) {
      let time = moment().format('MMM DD')
      let selectedGoal = state.selectedGoal

      if(state.exerciseCount[exercise] >= selectedGoal){
        state.finishedExercises.push({ exercise, time, selectedGoal })
        state.exerciseCount[exercise] = 0
      } state.exerciseCount[exercise]++
    },

    SELECT_FINISHED_EXERCISE(state, i) {
      state.selectedExercise = i
    },

    DELETE_FINISHED_EXERCISE(state) {
      state.finishedExercises.splice(state.selectedExercise, 1)
    },
    
    SET_GOAL(state, x) {
      state.selectedGoal = x
    }
  }