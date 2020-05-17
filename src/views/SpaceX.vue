<template>
<div>
	<v-layout :wrap="true" xs="12" md="4">
    <v-flex class="mt-7" v-for="(item, index) of arrayTotal" :key="index">
      
      <v-card
        class="mx-auto"
        max-width="333"
      >
        <v-img
          src="@/assets/falcon-9.jpg"
        ></v-img>

        <v-card-title>{{ item.rocket.rocket_name }}<sup>vo{{ item.flight_number }}</sup></v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            <b>Mission: </b>{{ item.mission_name }}
          </div>

          <div v-show="item.details">{{ item.details }}</div>
          <div class="my-4 subtitle-2" v-show="item.rocket.first_stage.cores[0].landing_type">
            <b>Tipo de Aterrizaje: </b>{{ item.rocket.first_stage.cores[0].landing_type }}
          </div>
        </v-card-text>

        <v-divider class="mx-4 mt-n5"></v-divider>

        <v-card-title>Lanzamiento: {{ item.launch_date_utc.substring(0,16) }}</v-card-title>

        <v-card-text class="mt-n4">
          <div class="my-4 subtitle-2" v-show="item.launch_site.site_name_long">
            <b>Lugar Lanzamiento: </b>{{ item.launch_site.site_name_long }}
          </div>
          <div class="my-4 subtitle-2" v-show="item.rocket.second_stage.payloads[0].orbit">
            <b>Órbita: </b>{{ item.rocket.second_stage.payloads[0].orbit }}
          </div>
        </v-card-text>
      </v-card>

    </v-flex>
  </v-layout>
</div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    option: '',
    arrayTotal: []
  }),
  created() {
    this.getDatos()
  },
  methods: {
    ...mapMutations(
      ['mostrarLoading', 'ocultarLoading']
    ),
    async getDatos() {

      this.mostrarLoading()

      let datos = await axios.get('https://api.spacexdata.com/v3/launches/upcoming')
        .then(res => {
          this.arrayTotal = res.data  
        })
        .catch(e => {
          console.log(e)
        })
        
      this.ocultarLoading()
    },
    mostrarOpcion(value) {
      this.option = value
    }
  }
}
</script>