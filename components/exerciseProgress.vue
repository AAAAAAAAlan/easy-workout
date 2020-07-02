<template>
  <div @click="$store.dispatch('start')" class="container">
    {{`${now}`}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
  ...mapState({
    now: state => state.now 
  })
  } 
}
</script>

<style lang="stylus" scoped>

</style>