import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import auth from "./auth";
import alpha from "../template/modules/alpha";
import parts_monitoring from "./modules/Parts/PartsMonitoring/parts_monitoring";
import email from "./modules/email.js";

import parts_device from "./modules/management/parts_device.js";
import parts_model from "./modules/management/parts_model.js";
import parts_unit from "./modules/management/parts_unit.js";

import partsRegistrationUnit from "./modules/Parts/PartsRegistrationUnit";
import partsRegistration from "./modules/Parts/PartsRegistration";


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
      alpha,
      parts_monitoring,
     email, 
     auth, 
     parts_device,
     parts_model,
     parts_unit,
     partsRegistrationUnit,
     partsRegistration
  }
});
