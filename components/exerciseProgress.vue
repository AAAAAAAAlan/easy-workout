<template>
  <v-card class="container text-center">
    <v-progress-circular
      class="progress"
      :rotate="360"
      :size="200"
      :width="30"
      :value="scaledCount"
      color="white"
    >
      {{ count }}
    </v-progress-circular>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'exerciseProgress',
  props: {
    count: {
      type: Number,
    },
  },
  computed: {
    ...mapState({
      selectedGoal: state => state.selectedGoal
    }),

    scaledCount() {
      return (100 / this.selectedGoal) * this.count
    }
  },
}
</script>

<style lang="stylus" scoped>
.progress
  font-weight 800
  font-size 17pt
</style>