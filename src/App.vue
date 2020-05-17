<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink ms-8"
          contain
          src="@/assets/Flat-Icons.com-Flat-Cabin.svg"
          transition="scale-transition"
          width="40"
        />
      </div>
      
      <v-list class="primary d-flex">
        <v-list-item class="ml-10" rounded="true" to="/cl">USD/CLP</v-list-item>
        <v-list-item class="ml-10" to="/ar">USD/ARG</v-list-item>
        <v-list-item class="ml-10" to="/spacex">SpaceX</v-list-item>
      </v-list>
    </v-app-bar>

    <v-content class="brown lighten-3">
      <v-container>
        <v-dialog
          v-model="loading.mostrar"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              {{ loading.titulo }}
              <v-progress-linear
                indeterminate
                :color="loading.color"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
        </v-card>
        </v-dialog>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['loading'])
  }
};
</script>
