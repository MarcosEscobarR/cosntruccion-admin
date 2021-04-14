<template>
<v-container>
  <v-data-table
    :items="items"
    :headers="headers"
    class="elevation-1"
  >
    <template #item.show>
      <v-btn icon @click="goToMovement">
        <v-icon color="primary">mdi-eye</v-icon>
      </v-btn>
    </template>
    <template #item.status="{item}">
      <div v-if="item.status === 'Activo'">
        <span class="green--text">Activo</span>
      </div>
      <div v-if="item.status === 'Borrador'">
        <span class="amber--text">Borrador</span>
      </div>
      <div v-if="item.status === 'Inactivo'">
        <span class="red--text">Inactivo</span>
      </div>
    </template>
  </v-data-table>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { DatatableHeaderModel } from '@/models/DatatableHeaderModel'
import { ConstructionHeaderModel } from '@/models/construction/ConstructionHeaderModel'

export default Vue.extend({
  name: 'ConstructionDatatable',
  props: {
    headers: {
      type: Array as () => DatatableHeaderModel[],
      required: true
    },
    items: {
      type: Array as () => ConstructionHeaderModel[],
      required: true
    }
  },
  methods: {
    goToMovement (item: ConstructionHeaderModel) {
      console.log(item)
      this.$router.push({
        name: 'movements',
        params: { id: 0 }
      })
    }
  }
})
</script>

<style scoped>

</style>
