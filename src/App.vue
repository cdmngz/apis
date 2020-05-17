<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <div class="mx-5">
        <v-img
          class="shrink"
          contain
          src="@/assets/Flat-Icons.com-Flat-Cabin.svg"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-tabs>
        <v-tab to="/ar">AR</v-tab>
        <v-tab to="/cl">CLP</v-tab>
        <v-tab to="/spacex">SpaceX</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-content>
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
