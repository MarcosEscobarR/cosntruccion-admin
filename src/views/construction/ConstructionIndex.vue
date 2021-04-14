<template>
  <v-container>
    <breadcrumbs :items="breadItems"/>
    <add-float-button route-name-redirect="newContruction"/>
    <component-header :header-data="headerData"/>

    <ConstructionDatatable :items="constructions" :headers="datatableHeaders"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '../../components/shared/Breadcrumbs.vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'
import ComponentHeader from '@/components/shared/ComponentHeader.vue'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel'
import ConstructionDatatable from '@/components/construction/ConstructionDatatable.vue'
import { DatatableHeaderModel } from '@/models/DatatableHeaderModel'
import { ConstructionHeaderModel } from '@/models/construction/ConstructionHeaderModel'
import AddFloatButton from '@/components/shared/AddFloatButton.vue'

export default Vue.extend({
  name: 'index-construction',
  components: {
    AddFloatButton,
    ConstructionDatatable,
    ComponentHeader,
    Breadcrumbs
  },
  data: () => ({
    breadItems: [{
      text: 'Obras',
      disabled: true,
      href: 'home'
    }] as BreadCrumbsModel[],
    headerData: {
      title: 'Obra',
      img: '@/assets/construccion.png',
      subTitle: 'Detalles de las Obras'
    } as ComponentHeaderModel,
    datatableHeaders: [
      {
        text: 'Id',
        value: 'id',
        class: 'black--text'
      },
      {
        text: 'Nombre',
        value: 'name',
        class: 'black--text'
      },
      {
        text: 'Responsable',
        value: 'leader',
        class: 'black--text'
      },
      {
        text: 'Estado',
        value: 'status',
        class: 'black--text'
      },
      {
        text: 'Ver',
        value: 'show',
        class: 'black--text'
      }
    ] as DatatableHeaderModel[],
    constructions: [
      {
        id: 1,
        leader: 'Juan Perez',
        name: 'Hospital Universitario',
        status: 'Activo'
      },
      {
        id: 2,
        leader: 'Juan Ayala',
        name: 'Casa Particular',
        status: 'Borrador'
      }
    ] as ConstructionHeaderModel[]
  })
})
</script>

<style scoped>

</style>
