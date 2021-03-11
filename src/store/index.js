import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import auth from "./auth";
import alpha from "../template/modules/alpha";
import parts_monitoring from "./modules/Parts/PartsMonitoring/parts_monitoring";
import email from "./modules/email.js";
import partsRegistrationUnit from "./modules/Parts/PartsRegistrationUnit";
import partsRegistration from "./modules/Parts/PartsRegistration";

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
     parts,
     partsRegistrationUnit,
     partsRegistration
  }
});
