<template>
  <v-container>
    <v-card>
      <v-form v-model="valid">
        <v-card-text>
          <h3>Nombre</h3>
          <v-text-field
            :rules="[validators.required]"
            outlined
            v-model="formModel.nombre"
            placeholder="Nombre"/>
          <h3>Direccion</h3>
          <v-text-field
            :rules="[validators.required]"
            outlined
            v-model="formModel.direccion"
            placeholder="Direccion"/>
          <h3>Telefono</h3>
          <v-text-field
            :rules="[validators.required]"
            outlined
            v-model="formModel.telefono"
            placeholder="Telefono"/>
          <h3>Responsable</h3>
          <v-text-field
            :rules="[validators.required]"
            outlined
            v-model="formModel.reponsable"
            placeholder="Responsable"/>
          <h3>Estado</h3>
          <v-text-field
            :rules="[validators.required]"
            outlined
            v-model="formModel.estado"
            placeholder="Estado"/>
        </v-card-text>
      </v-form>
    </v-card>
    <div class="d-flex justify-end ma-5">
      <v-btn :disabled="!valid">Guardar</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { NewConstructionModel } from '@/models/construction/NewConstructionModel'
import { Validators } from '../../../Validators'

export default Vue.extend({
  name: 'NewConstructionForm',
  data: () => ({
    valid: false,
    validators: Validators,
    formModel: {
      direccion: '',
      estado: '',
      nombre: '',
      reponsable: '',
      telefono: ''
    } as NewConstructionModel
  })
})
</script>

<style scoped>

</style>
