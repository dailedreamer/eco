import axios from "axios";

export default {
    //properties
    //Reusable Data
    state:{
    parts_registration_unit: [],
    },
    //setter of state
    mutations:{
        SET_PARTS_REGISTRATION_UNIT(state, units_pe) {
            state.parts_registration_unit = units_pe;
        }
    },
   //composed pf all methods and call the mutation
   actions:
   {
        async uploadPartsRegistrationUnit(state, payload){
            return new Promise((resolve, reject) => {
                axios   
                    .post(`units-pe/file-upload/${payload[1]}`, payload[0], {
                        header: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            });
        },

        async loadUnitsPe({commit}){
            return new Promise((resolve, reject) => {
                axios
                    .get("units-pe/load-parts-registration")
                    .then(function(response){
                        commit("SET_PARTS_REGISTRATION_UNIT", response.data);
                        let result = {
							code: response.data.code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data,
						};
                        resolve(result);
                    })
                    .catch(function(error) {
						reject(error.response);
					});
            })
        }
   },
   getters:{
        getUnitsPeRegistration: (state) => state.parts_registration_unit,
   },
};