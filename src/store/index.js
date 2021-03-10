import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import auth from "./auth";

import alpha from "../template/modules/alpha";
import email from "./modules/email.js";
import parts from "./modules/management/parts.js";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha, email, auth, parts
  }
});
