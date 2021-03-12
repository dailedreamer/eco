import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import auth from "./auth";
import alpha from "../template/modules/alpha";
import parts_monitoring from "./modules/Parts/PartsMonitoring/parts_monitoring";
import email from "./modules/email.js";
<<<<<<< HEAD
import parts_device from "./modules/management/parts_device.js";
import parts_model from "./modules/management/parts_model.js";
import parts_unit from "./modules/management/parts_unit.js";

=======
import partsRegistrationUnit from "./modules/Parts/PartsRegistrationUnit";
import partsRegistration from "./modules/Parts/PartsRegistration";

import parts from "./modules/management/parts.js";
>>>>>>> 922bd3c73b72136a446cca2ac1bd8c5e15330e91

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
      alpha,
      parts_monitoring,
     email, 
     auth, 
<<<<<<< HEAD
     parts_device,
     parts_model,
     parts_unit

=======
     parts,
     partsRegistrationUnit,
     partsRegistration
>>>>>>> 922bd3c73b72136a446cca2ac1bd8c5e15330e91
  }
});
