import Vue from 'vue'
import Vuex from 'vuex'
import companies from './modules/companies'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
  },
  actions: {
  },
  modules: {
    companies,
    auth
  }
})
