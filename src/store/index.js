import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading : {
      titulo: '',
      mostrar: false
    }
  },
  mutations: {
    mostrarLoading(state) {
      state.loading.titulo = 'Cargando datos...'
      state.loading.mostrar = true
    },
    ocultarLoading(state) {
      state.loading.mostrar = false
    }
  },
  actions: {
  },
  modules: {
  }
})
