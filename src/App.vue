<template>
  <div id="app">

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {

  },
  created () {
    this.setTicker()
  },
  methods: {
    ...mapActions(['setTicker'])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0 auto;
}
</style>
