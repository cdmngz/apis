<template>
<div>
	<v-layout class="mt-7" :wrap="true">
    <v-flex class="mx-2" v-for="(item, index) of arrayTotal" :key="index">
      
      <v-card
        class="mx-auto my-8"
        max-width="374"
      >
        <v-img
          height="250"
          src="@/assets/falcon-9.jpg"
        ></v-img>

        <v-card-title>{{ item.rocket.rocket_name }} <sup> #{{ item.flight_number }}</sup></v-card-title>

        <v-card-text>
          <div class="my-4 subtitle-1">
            <b>Mission: </b>{{ item.mission_name }}
          </div>

          <div v-show="item.details">{{ item.details }}</div>
          <div class="my-4 subtitle-2" v-show="item.rocket.first_stage.cores[0].landing_type">
            <b>Tipo de Aterrizaje: </b>{{ item.rocket.first_stage.cores[0].landing_type }}
          </div>
        </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Lanzamiento: {{ item.launch_date_utc.substring(0,10) }}</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="primary accent-4 white--text"
        column
      >
        <v-chip>Lugar</v-chip>

        <v-chip>Órbita</v-chip>

        <v-chip>Updated</v-chip>

        <v-chip>Fuente</v-chip>
      </v-chip-group>
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
    selection: 1,
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
    }
  }
}
</script>