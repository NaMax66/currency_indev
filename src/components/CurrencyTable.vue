<template>
  <table class="currency_table_wrap">
    <thead>
    <tr class="currency_table_row">
      <th class="table_head_item">Pair</th>
      <th class="table_head_item">Bid</th>
      <th class="table_head_item">Ask</th>
    </tr>
    </thead>
    <tbody>
      <tr class="currency_table_row" v-for="(pair, id) in getPairsDescription" :key="id">
        <td class="table_body_item">{{getReadableName(pair)}}</td>
        <td class="table_body_item">{{ getBid(pair) }}</td>
        <td class="table_body_item">{{ getAsk(pair) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CurrencyTable',
  computed: {
    ...mapGetters(['getPairsValue', 'getPairsDescription', 'getPairValueByName'])
  },
  methods: {
    getReadableName (pair) {
      return `${pair.baseName}/${pair.quoteName}`
    },
    getBid (pair) {
      const pairValue = this.getPairValueByName(pair.name)
      return pairValue.b ? +pairValue.b[0] : ''
    },
    getAsk (pair) {
      const pairValue = this.getPairValueByName(pair.name)
      return pairValue.a ? +pairValue.a[0] : ''
    }
  }
}
</script>

<style scoped>
  .currency_table_wrap {
    display: inline-block;
    margin-top: 100px;
    border-collapse: collapse;
  }
  .table_head_item,
  .table_body_item {
    font-weight: normal;
    text-align: left;
    padding: 10px 15px 10px 5px;
  }
  .table_head_item,
  .table_body_item {
    border: 1px solid black;
  }
</style>
