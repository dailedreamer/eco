import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import alpha from "../template/modules/alpha";
import parts_monitoring from "./modules/Parts/PartsMonitoring/parts_monitoring";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alpha,
    parts_monitoring
  }
});
