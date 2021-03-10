import Vue from "vue";
import Vuex from "vuex";
import Multiselect from 'vue-multiselect'
import Select2 from 'v-select2-component';

Vue.use(Vuex);
Vue.component('multiselect', Multiselect)
Vue.component('Select2', Select2);

import alpha from "../template/modules/alpha";
<<<<<<< HEAD
import email from "./modules/email.js";
=======
import partsRegistration from "./Parts/PartsRegistration"
>>>>>>> part_registration_unit
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
<<<<<<< HEAD
    alpha, email
=======
    alpha,
    partsRegistration
>>>>>>> part_registration_unit
  }
});
