<template>
  <v-container>
    <div class="d-inline-flex ">
      <div class="image-container">
        <v-img width="100" height="150" contain src="@/assets/construccion.png"/>
      </div>
      <div class="d-block">
        <div class="header-title-container">
          <span class="header-title">{{ headerData.title.toUpperCase() }}</span>
        </div>
        <div class="subtitle-container">
          <span class="header-subtitle">{{ headerData.subTitle }}</span>
        </div>
      </div>
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
.image-container {
  width: 120px;
}

.header-title-container {
  margin-top: 30px;
}

.header-title {;
  font-size: 40px;
}
</style>
