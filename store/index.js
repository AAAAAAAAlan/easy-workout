  import moment from 'moment'

  export const state = () => ({

    exerciseCount: {
      pullups: 0,
      situps: 0,
      pushups: 0
    },

    finishedExercises: [],

    selectedExercise: null,

  })

  export const mutations = {
    ADD_EXERCISE (state, exercise) {
      let time = moment().format('MMM DD')

      if(state.exerciseCount[exercise] >= 100){
        state.finishedExercises.push({ exercise, time })
        state.exerciseCount[exercise] = 0
      } state.exerciseCount[exercise]++
    },

    SELECT_FINISHED_EXERCISE(state, i) {
      state.selectedExercise = i
    },

    DELETE_FINISHED_EXERCISE(state) {
      state.finishedExercises.splice(state.selectedExercise, 1)
    },

    DEBUG(state) {
      state.exerciseCount.pullups = 99
    }
  }