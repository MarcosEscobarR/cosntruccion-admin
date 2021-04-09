<template>
  <v-container>
    <div>
      <breadcrumbs :items="breadItems"/>
      <component-header :header-data="headerData"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '../../components/Breadcrumbs'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'
import ComponentHeader from '@/components/ComponentHeader.vue'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel'

export default Vue.extend({
  name: 'index-construction',
  components: { ComponentHeader, Breadcrumbs },
  data: () => ({
    breadItems: [{
      text: 'Obras',
      disabled: true,
      href: 'home'
    }] as BreadCrumbsModel[],
    headerData: { title: 'Obra', img: '@/assets/construccion.png' } as ComponentHeaderModel
  })
})
</script>

<style scoped>

</style>
