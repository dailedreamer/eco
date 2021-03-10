import Vue from "vue";
import Vuex from "vuex";
import Multiselect from 'vue-multiselect'
import Select2 from 'v-select2-component';

Vue.use(Vuex);
<<<<<<< HEAD
Vue.component('multiselect', Multiselect)
Vue.component('Select2', Select2);
=======
import auth from "./auth";
>>>>>>> 3ee8efd38f9b7f2894594954e81cc65e81d3a4d1

import alpha from "../template/modules/alpha";
<<<<<<< HEAD
import email from "./modules/email.js";
<<<<<<< HEAD
=======
import partsRegistration from "./Parts/PartsRegistration"
>>>>>>> part_registration_unit
=======
import parts from "./modules/management/parts.js";
>>>>>>> 3ee8efd38f9b7f2894594954e81cc65e81d3a4d1
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
<<<<<<< HEAD
<<<<<<< HEAD
    alpha, email
=======
    alpha,
    partsRegistration
>>>>>>> part_registration_unit
=======
    alpha, email, auth, parts
>>>>>>> 3ee8efd38f9b7f2894594954e81cc65e81d3a4d1
  }
});
