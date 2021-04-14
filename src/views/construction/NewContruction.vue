<template>
  <v-container>

    <breadcrumbs :items="breadItems"/>
    <component-header :header-data="headerData"/>

    <v-row>
      <v-col>
        <new-construction-form/>
      </v-col>
      <!--        TODO:  other column with map for contruction-->
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import ComponentHeader from '@/components/shared/ComponentHeader.vue'
import Breadcrumbs from '@/components/shared/Breadcrumbs.vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'
import { ComponentHeaderModel } from '../../models/ComponentHeaderModel'
import NewConstructionForm from '@/components/construction/NewConstructionForm.vue'

export default Vue.extend({
  name: 'ConstructionMovement',
  components: {
    NewConstructionForm,
    ComponentHeader,
    Breadcrumbs
  },
  data: () => ({
    breadItems: [{
      text: 'Obras',
      disabled: false,
      href: '/'
    },
    {
      text: 'Nuevo',
      disabled: true,
      href: 'home'
    }] as BreadCrumbsModel[],
    headerData: {
      title: 'Nueva Obra',
      img: '@/assets/construccion.png',
      subTitle: 'Cree su Nueva Obra'
    } as ComponentHeaderModel
  })
})
</script>

<style scoped>

</style>
