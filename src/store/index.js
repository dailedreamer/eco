import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import auth from "./auth";

import alpha from "../template/modules/alpha";
export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha,
    auth
  }
});
