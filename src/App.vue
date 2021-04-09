<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      class="d-flex"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-img class="mt-5" src="./assets/vIGILA 2S-2-01.png"/>
      <v-divider/>

      <v-select
        label="Selecciona Obra"
        outlined
        class="mx-2 mt-4"
        :items="selectItems"
        item-text="title"
        item-value="id"
        @input="selectedContrucction"/>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="primary--text ">
          <v-list-item v-for="item in adminNavItems" :key="item.title">
            <v-list-item-icon>
              <v-icon left>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view :key="$route.fullPath"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { ListItemDrawerModel } from '@/models/ListItemDrawerModel'

export default Vue.extend({
  name: 'App',
  methods: {
    selectedContrucction (id: number): null {
      this.$store.commit('updateConstructionId', id)
    }
  },
  data: () => ({
    drawer: null | true | false,
    group: false,
    adminNavItems: [
      {
        title: 'Obras',
        to: '/',
        icon: 'mdi-account-hard-hat'
      },
      {
        title: 'Usuarios',
        to: '/',
        icon: 'mdi-account'
      },
      {
        title: 'Compras',
        to: '/',
        icon: 'mdi-cart'
      }
    ] as ListItemDrawerModel[],
    selectItems: [{
      id: 1,
      title: 'Hospital Universitario'
    }, {
      id: 2,
      title: 'Casa Particular'
    }]
  })
})
</script>
