<template>
  <v-container>
    <div>
      <breadcrumbs :items="breadItems"/>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import Breadcrumbs from '../../components/Breadcrumbs'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'

export default Vue.extend({
  name: 'index-construction',
  components: { Breadcrumbs },
  data: () => ({
    breadItems: [{
      text: 'Obras',
      disabled: true,
      href: 'home'
    }] as BreadCrumbsModel[]
  })
})
</script>

<style scoped>

</style>
