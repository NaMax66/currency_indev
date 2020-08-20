<template>
  <div id="app">
    <div class="wrapper">
      <currency-table />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CurrencyTable from './components/CurrencyTable'

export default {
  name: 'App',
  components: {
    CurrencyTable

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
}
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}
</style>
