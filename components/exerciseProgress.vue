<template>
  <v-card class="container text-center">
    <v-progress-circular
      class="progress"
      :rotate="360"
      :size="200"
      :width="30"
      :value="count"
      color="white"
    >
      {{count}}
    </v-progress-circular>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    count: {
      type: Number,
    },
  },
}
</script>

<style lang="stylus" scoped>
.progress
  font-weight 800
  font-size 17pt
</style>