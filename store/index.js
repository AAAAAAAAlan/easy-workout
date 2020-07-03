  export const state = () => ({
    now: new Date,

    exerciseCount: {
      pullups: 0,
      situps: 0,
      pushups: 0
    }
  })

  export const mutations = {
    // инстанс времени, возможно понадобится в будущем
    // updateTime (state) {
    //   state.now = new Date
    // },

    addExercise (state, exercise) {
      if(state.exerciseCount[exercise] >= 100){
        state.exerciseCount[exercise] = 0
      } state.exerciseCount[exercise]++
    }
  }

  export const actions = {
    // инстанс времени, возможно понадобится в будущем
    // start ({ commit }) {
    //   setInterval(() => {
    //     commit('updateTime')
    //   }, 60000)
    // }
  }