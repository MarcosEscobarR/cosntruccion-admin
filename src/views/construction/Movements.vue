<template>
  <v-container>
    <breadcrumbs :items="breadItems"/>
    <component-header :header-data="componentHeader"/>

    <expandible-datatable :headers="headers" :items="items"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '@/components/shared/Breadcrumbs.vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel'
import ComponentHeader from '@/components/shared/ComponentHeader.vue'
import ExpandibleDatatable from '@/components/shared/ExpandibleDatatable.vue'
import { DataTableHeader } from 'vuetify'
import { MovementsHeaderModel } from '@/models/movements/MovementsHeaderModel'

export default Vue.extend({
  name: 'Movements',
  components: {
    ExpandibleDatatable,
    ComponentHeader,
    Breadcrumbs
  },
  data: () => ({
    breadItems: [{
      disabled: false,
      text: 'Obras',
      href: '/'
    }, {
      disabled: true,
      text: 'Movimientos',
      href: '/'
    }] as BreadCrumbsModel[],
    componentHeader: {
      subTitle: 'Movimientos de la Obra',
      title: 'Movimientos',
      img: '@/assets/construccion.png'
    } as ComponentHeaderModel,
    headers: [{
      text: 'Id',
      value: 'id'
    }, {
      text: 'Depositero',
      value: 'depositor'
    }, {
      text: 'Fecha',
      value: 'date'
    }, {
      text: 'Tipo de Movimiento',
      value: 'type'
    }, {
      text: 'Observacion',
      value: 'observation'
    }, {
      text: 'Responsable',
      value: 'leader'
    }, {
      text: 'Zona de Obra',
      value: 'workArea'
    }] as DataTableHeader[],
    items: [{
      id: 1,
      date: '02/02/2020',
      depositor: 'Juan Perez',
      leader: 'Juanito Perez',
      observation: '-',
      type: 'Salida',
      workArea: 'A1',
      details: [{
        product: 'Varilla',
        amount: 2,
        id: 1
      }]
    }] as MovementsHeaderModel[]
  })
})
</script>

<style scoped>

</style>
