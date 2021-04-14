<template>
<v-data-table :items="items" :headers="headers" class="elevation-1">
  <template #item.option="{item}">
    <v-switch
      :label="optionLabel"
      v-model="item.option"
    />
  </template>
</v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { MovementsHeaderModel } from '@/models/movements/MovementsHeaderModel'

export default Vue.extend({
  name: 'DatatableWithOption',
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array as () => MovementsHeaderModel[]
    },
    optionType: {
      type: String,
      required: true
    },
    optionLabel: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
