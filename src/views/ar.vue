<template>
<div>
  <v-layout class="mt-2" :wrap="true">
    <v-flex class="ma-5" v-for="(item, index) of arregloTotal" :key="index">
      <v-card class="pa-5" elevation="2">
        <h2><u>{{ item.casa.nombre }}</u></h2>
        <h4>Compra: {{ item.casa.compra }}</h4>
        <h4>Venta: {{ item.casa.venta }}</h4>
        <h6>Variación: {{ item.casa.variacion }}</h6>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>

import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: 'Ar',
  data: () => ({
    arregloTotal: []
  }),
  created() {
    this.getDolar()
  },
  methods: {
    ...mapMutations(
      ['mostrarLoading', 'ocultarLoading']
    ),
    async getDolar() {

      this.mostrarLoading()

      let datos = await axios.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
        .then(res => {
          this.arregloTotal = res.data  
        })
        .catch(e => {
          console.log(e)
        })
        
      this.ocultarLoading()
    }
  }
}
</script>