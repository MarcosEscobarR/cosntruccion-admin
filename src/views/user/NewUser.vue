<template>
  <v-container>
    <breadcrumbs :items="breadItems"/>
    <component-header :header-data="headerData"/>
    <div class="card-container">
      <v-card width="400" v-if="!complete">
        <v-card-text >Invitar Usuarios</v-card-text>
        <v-card-actions>
          <v-select
            v-model="role"
            :items="selectItems"
            outlined
            placeholder="Selecciona Rol"/>
        </v-card-actions>
        <v-card-actions class="justify-end">
          <v-btn @click="inviteUser">Invitar</v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="complete">
        <v-card-subtitle>
          Copie este codigo y envie al usuario que quiere invitar, el necesitara este codigo para registrarse
        </v-card-subtitle>
        <v-card-text>{{ this.code }}</v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { BreadCrumbsModel } from '@/models/BreadCrumbsModel.ts'
import { ComponentHeaderModel } from '@/models/ComponentHeaderModel.ts'
import Breadcrumbs from '@/components/shared/Breadcrumbs.vue'
import ComponentHeader from '@/components/shared/ComponentHeader.vue'

export default Vue.extend({
  name: 'newUser',
  components: {
    ComponentHeader,
    Breadcrumbs
  },
  computed: {
    complete: {
      get () {
        return this.value
      },
      set (val) {
        this.value = val
        return this.value
      }
    }
  },
  data: () => ({
    breadItems: [{
      text: 'Usuarios',
      disabled: false,
      href: '/usuarios'
    }, {
      text: 'nuevo',
      disabled: true,
      href: 'users'
    }] as BreadCrumbsModel[],
    headerData: {
      img: '@/assets/casco.png',
      title: 'Invitar Usuario',
      subTitle: 'Invitar Usuarios a la Obra'
    } as ComponentHeaderModel,
    selectItems: [
      'Admin',
      'Depositero',
      'Jefe de Obra'
    ],
    role: null,
    code: '',
    invitation: {
      code: '',
      rol: ''
    },
    value: false
  }),
  methods: {
    inviteUser () {
      this.code = Math.random().toString(36).substring(2)
      this.invitation = {
        code: this.code,
        rol: this.role
      }
      this.complete = true
    }
  }
})
</script>

<style scoped>
.card-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
