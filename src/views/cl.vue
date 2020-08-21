<template>
<div>
  <v-layout class="mt-7" :wrap="true">
    <v-flex xs12>
      <v-card>
        <v-date-picker
          full-width
          color="primary"
          locale="es-es"
          :max="maximo"
          :min="minimo"
          v-model="fecha"
          @change="getDolar(fecha)"
          ></v-date-picker>
      </v-card>
      <v-card color="indigo lighten-3">
        <v-card-text class="display-1 text-sm-center">1USD = {{ precioDolar }}</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs12>
      <blockquote class="mt-3 font-weight-light subtitle-1" >Un agradecimiento especial a <a href="https://www.bluuweb.org/">bluuweb.org</a></blockquote>
    </v-flex>
  </v-layout>
</div>
</template>

<script>

import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Cl',
  data: () => ({
    fecha: new Date().toISOString().substring(0, 10),
    maximo: new Date().toISOString().substring(0, 10),
    minimo: '1984',
    precioDolar: null
  }),
  created() {
    this.getDolar(this.fecha)
  },
  methods: {
    ...mapMutations(['mostrarLoading', 'ocultarLoading']),
    async getDolar(value) {

      this.mostrarLoading()
      
      let arrayFecha = value.split('-')
      let ddmmyyyy = `${arrayFecha[2]}-${arrayFecha[1]}-${arrayFecha[0]}`

      try {
        let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyyyy}`)
        if(datos.data.serie.length > 0) {
          this.precioDolar = await datos.data.serie[0].valor+' CLP'
        } else {
          this.precioDolar = 'Sin Resultados'
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.ocultarLoading()
      }
    }
  }
}
</script>