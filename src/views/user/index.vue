<template>
  <v-container>
    <breadcrumbs :items="breadItems"/>
    <add-float-button route-name-redirect="newUser"/>
    <component-header :header-data="headerData"/>
    <datatable-with-option
      option-type="switch"
      option-label="Activar/Desactivar"
      :items="items"
      :headers="headers"/>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '@/components/shared/Breadcrumbs.vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'
import ComponentHeader from '../../components/shared/ComponentHeader.vue'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel'
import DatatableWithOption from '@/components/shared/DatatableWithOption.vue'
import { UserHeaderModel } from '@/models/UserHeaderModel'
import { DatatableHeaderModel } from '@/models/DatatableHeaderModel'
import AddFloatButton from '@/components/shared/AddFloatButton.vue'

export default Vue.extend({
  name: 'index',
  components: {
    AddFloatButton,
    DatatableWithOption,
    ComponentHeader,
    Breadcrumbs
  },
  data: () => ({
    breadItems: [{
      text: 'Usuarios',
      disabled: true,
      href: '/'
    }] as BreadCrumbsModel[],
    headerData: {
      img: '@/assets/casco.png',
      title: 'Usuarios',
      subTitle: 'Usuarios de la Obra'
    } as ComponentHeaderModel,
    items: [] as UserHeaderModel[],
    headers: [{
      text: 'Id',
      value: 'id'
    }, {
      text: 'Nombre',
      value: 'name'
    }, {
      text: 'Rol',
      value: 'rol'
    }, {
      text: 'DNI',
      value: 'dni'
    }, {
      text: 'Estado',
      value: 'status'
    }, {
      text: 'Qr',
      value: 'qr'
    }, {
      text: 'Opciones',
      value: 'options'
    }] as DatatableHeaderModel[]
  })
})
</script>

<style scoped>

</style>
