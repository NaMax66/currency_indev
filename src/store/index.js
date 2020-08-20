import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pairs: [
      {
        id: 1,
        name: 'XXBTZUSD',
        baseName: 'Bitcoin',
        quoteName: 'USD'
      },
      {
        id: 2,
        name: 'XXBTZEUR',
        baseName: 'Bitcoin',
        quoteName: 'EUR'
      },
      {
        id: 3,
        name: 'XETHZUSD',
        baseName: 'Ethereum',
        quoteName: 'USD'
      },
      {
        id: 1,
        name: 'XETHZEUR',
        baseName: 'Ethereum',
        quoteName: 'EUR'
      },
      {
        id: 1,
        name: 'XXRPZUSD',
        baseName: 'Ripple XRP',
        quoteName: 'USD'
      }
    ],
    ticker: null
  },
  getters: {
    getPairsNames (state) {
      return state.pairs.reduce((acc, el) => {
        acc.push(el.name)
        return acc
      }, []).join(',')
    },
    getPairsDescription (state) {
      return state.pairs
    },
    getPairsValue (state) {
      if (state.ticker && state.ticker.result) {
        return state.ticker.result
      }
      return []
    },
    getPairValueByName (state) {
      return (name) => {
        if (state.ticker && state.ticker.result) {
          return state.ticker.result[name]
        }
        return {}
      }
    }
  },
  mutations: {
    setTicker (state, payload) {
      state.ticker = payload
    }
  },
  actions: {
    async setTicker ({ commit, getters }) {
      const { data } = await axios.get('https://api.kraken.com/0/public/Ticker?pair=' + getters.getPairsNames)
      commit('setTicker', data)
    }
  }
})
