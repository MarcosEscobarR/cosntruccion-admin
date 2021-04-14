<template>
  <div class="d-flex">
    <v-btn
      absolute
      color="primary"
      dark
      right
      fab
      @click="redirect"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'AddFloatButton',
  props: {
    routeNameRedirect: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: null
    }
  },
  methods: {
    redirect () {
      this.$router.push({
        name: this.routeNameRedirect,
        params: this.params
      })
    }
  }
}
</script>

<style scoped>

</style>
