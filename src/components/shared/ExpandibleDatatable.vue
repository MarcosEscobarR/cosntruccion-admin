<template>
  <div>
    <v-data-table
      show-expand
      :headers="headers"
      :items="items"
      item-key="id"
      class="elevation-1"
    >
      <template #expanded-item="{headers, item}">
        <td :colspan="headers.length">
          <v-row>
            <v-col align="center"><span class="font-weight-bold">ID</span></v-col>
            <v-col align="center"><span class="font-weight-bold">Producto</span></v-col>
            <v-col align="center"><span class="font-weight-bold">Cantidad</span></v-col>
          </v-row>
          <v-divider class="my-3"/>
          <v-row v-for="(it, ind) in item.details" :key="ind">
            <v-col align="center">
              {{ it.id }}
            </v-col>
            <v-col align="center">
              {{ it.product }}
            </v-col>
            <v-col align="center">
              {{ it.amount }}
            </v-col>
          </v-row>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MovementsHeaderModel } from '@/models/movements/MovementsHeaderModel'

export default Vue.extend({
  name: 'ExpandibleDatatable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array as () => MovementsHeaderModel[]
    }
  }
})
</script>

<style scoped>

</style>
