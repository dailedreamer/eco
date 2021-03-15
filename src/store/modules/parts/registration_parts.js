// import axios from "axios";
export default {
  state: {
    parts_registration_units:[],
  },
  mutations: {
    SET_PARTS_REGISTRATION_UNITS(state, units) {
        state.units = units;
      },
  },
  actions: {
      // async loadPartsRegistrationUnit({ commit }) {
      //   return new Promise((resolve, reject) => {
      //     // axios
      //     //   .get("devices")
      //     //   .then(function(response) {
      //     //     commit("SET_PARTS_REGISTRATION_UNITS", response.data);
      //     //     let result = {
      //     //       code: response.data.code,
      //     //       status: response.data.status,
      //     //       message: response.data.message,
      //     //       data: response.data.data,
      //     //     };
      //     //     resolve(result);
      //     //   })
      //     //   .catch(function(error) {
      //     //     reject(error);
      //     //   });
      //   });
      //   },
  },
  getters: {
         getPartsRegistrationUnits: (state) => state.parts_registration_units,
  }
}
