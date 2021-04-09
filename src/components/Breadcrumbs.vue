<template>
<v-breadcrumbs
  :items="items"
  large
>
  <template v-slot:divider>
    <v-icon>mdi-chevron-right</v-icon>
  </template>
</v-breadcrumbs>
</template>

<script lang="ts">
import Vue from 'vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel'

export default Vue.extend({
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array as () => BreadCrumbsModel[],
      required: true
    }
  }
})
</script>

<style scoped>

</style>
