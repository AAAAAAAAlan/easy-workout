  export const state = () => ({
    now: new Date,

    exerciseCount: {
      pullups: 0,
      situps: 0,
      pushups: 0
    }
  })

  export const mutations = {
    updateTime (state) {
      state.now = new Date
    },

    addExercise (state, exercise) {
      state.exerciseCount[exercise]++
    }
  }

  export const actions = {
    start ({ commit }) {
      setInterval(() => {
        commit('updateTime')
      }, 60000)
    }
  }