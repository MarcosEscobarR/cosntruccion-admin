<template>
  <v-container>
    <div class="d-inline-flex ">
      <v-img width="100" height="150" contain src="@/assets/construccion.png"/>
      <span>{{ headerData.title }}</span>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel'

export default Vue.extend({
  name: 'ComponentHeader',
  props: {
    headerData: {
      type: Object as () => ComponentHeaderModel
    }
  }
})
</script>

<style scoped>

</style>
