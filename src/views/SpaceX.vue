<template>
<div>
  <div class="espacio">
    <img src="../assets/espacio.png"/>
    <img src="../assets/cloud.png"/>
    <img src="../assets/cloud.png"/>
    <img src="../assets/cloud.png"/>
    <img src="../assets/cloud.png"/>
    <img src="../assets/nature.png"/>
  </div>
  <v-layout :wrap="true" xs="12" md="4">
    <v-flex class="mt-7" v-for="(item, index) of arrayTotal" :key="index">
      
      <v-card
        class="mx-auto"
        max-width="333"
      >
        <v-img :src="require(`../assets/${spaceImg[index]}`)"></v-img>
        <v-card-title>{{ item.rocket.rocket_name }}<sup>vo{{ item.flight_number }}</sup></v-card-title>

        <v-card-text>
          <div class="subtitle-2 text--primary">{{ item.mission_name }}</div>
          <div class="subtitle-2 font-weight-regular" v-show="item.details">{{ item.details }}</div>
          <div class="my-4 subtitle-2" v-show="item.rocket.first_stage.cores[0].landing_type">
            <b>Tipo de Aterrizaje: </b>{{ item.rocket.first_stage.cores[0].landing_type }}
          </div>
        </v-card-text>

        <v-divider class="mx-4 mt-n5"></v-divider>

        <v-card-title>Lanzamiento: {{ item.launch_date_utc.substring(0,10) }}</v-card-title>

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
    arrayTotal: [],
    option: '',
    spaceImg: ['space1.jpg', 'space2.jpeg', 'space3.jpg', 'space4.jpg', 'space5.jpg', 'space6.jpg', 'space7.jpg', 'space8.jpeg', 'space9.jpg', 'space10.jpg', 'space11.jpeg','space1.jpg', 'space5.jpg', 'spac3.jpg',]
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

<style scoped>
.espacio {
  background: linear-gradient(#000, #CCFFFF);
  position: absolute;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
}
.espacio img {
  width: 100%;
  position: absolute;
}
.espacio img:not(:first-child):not(:last-child) {
  animation: nubes 300s infinite;
  width: 200px;
}
.espacio img:nth-of-type(2) {
  bottom: 22%;
  right: 5%;
}
.espacio img:nth-of-type(3) {
  bottom: 16%;
  right: 5%;
}
.espacio img:nth-of-type(4) {
  bottom: 20%;
  right: 25%;
}
.espacio img:nth-of-type(5) {
  bottom: 15%;
  left: 20%;
}
.espacio img:last-of-type {
  bottom: 0;
  left: 0;
}
@keyframes nubes {
  100% {
    transform: translateX(-100vw);
  }
}
</style>