  export const state = () => ({
    now: new Date
  })

  export const mutations = {
    updateTime (state) {
      state.now = new Date
    }
  }

  export const actions = {
    start ({ commit }) {
      setInterval(() => {
        commit('updateTime')
      }, 60000)
    }
  }