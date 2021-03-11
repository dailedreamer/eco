import Vue from "vue";
import Vuex from "vuex";
// import Multiselect from 'vue-multiselect'
// import Select2 from 'v-select2-component';

Vue.use(Vuex);
import auth from "./auth";
import alpha from "../template/modules/alpha";
import parts_monitoring from "./modules/Parts/PartsMonitoring/parts_monitoring";
import email from "./modules/email.js";
// import partsRegistration from "./Parts/PartsRegistration"

import parts from "./modules/management/parts.js";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha,
    parts_monitoring,
     email, 
     auth, 
     parts
  }
});
