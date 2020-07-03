<template>
  <exerciseProgress :count="exerciseCount.pullups" />
</template>

<script>
import exerciseProgress from '~/components/exerciseProgress.vue'
import { mapState } from 'vuex'

export default {
  components: {
    exerciseProgress,
  },

  computed: {
    ...mapState({
      exerciseCount: state => state.exerciseCount
    })
  },
}
</script>

<style>

</style>