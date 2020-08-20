import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pairs: [
      {
        id:1,
        name: 'XBTUSD',
        baseName: 'Bitcoin',
        quoteName: 'USD'
      },
      {
        id:2,
        name: 'XBTEUR',
        baseName: 'Bitcoin',
        quoteName: 'EUR'
      },
      {
        id:3,
        name: 'ETHUSD',
        baseName: 'Ethereum',
        quoteName: 'USD'
      },
      {
        id:1,
        name: 'ETHEUR',
        baseName: 'Ethereum',
        quoteName: 'EUR'
      },
      {
        id:1,
        name: 'XRPUSD',
        baseName: 'Ripple XRP',
        quoteName: 'USD'
      }
    ],
    ticker: null
  },
  getters: {
    getPairs(state) {
      return state.pairs
    }
  },
  mutations: {
    setTicker(state, payload) {
      this.ticker = payload
    }
  },
  actions: {
    async setTicker({commit}) {
      const pairList = this.getPairs.reduce((acc, el) =>{
        acc.push(el.name)
        return acc
      }, []).join(',')
      console.log(pairList)
      const {data} = await axios.get('https://api.kraken.com/0/public/Ticker?pair=' + pairList)
      commit('setTicker', data)
    }
  },
  modules: {
  }
})
