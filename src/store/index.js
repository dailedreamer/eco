import Vue from "vue";
import Vuex from "vuex";
import Multiselect from 'vue-multiselect'
import Select2 from 'v-select2-component';

Vue.use(Vuex);
Vue.component('multiselect', Multiselect)
Vue.component('Select2', Select2);

import alpha from "../template/modules/alpha";
import partsRegistration from "./Parts/PartsRegistration"
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha,
    partsRegistration
  }
});
