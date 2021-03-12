import axios from "axios";
export default {
  state: {
    units:[],
  },
  mutations: {
    SET_UNITS(state, units) {
        state.units = units;
      },
  },
  actions: {
      async loadDevice({ commit }) {
        return new Promise((resolve, reject) => {
          axios
            .get("devices")
            .then(function(response) {
              commit("SET_UNITS", response.data);
              let result = {
                code: response.data.code,
                status: response.data.status,
                message: response.data.message,
                data: response.data.data,
              };
              resolve(result);
            })
            .catch(function(error) {
              reject(error);
            });
        });
        },
  },
  getters: {
         getPartsRegistrationUnits: (state) => state.units,
  }
}
