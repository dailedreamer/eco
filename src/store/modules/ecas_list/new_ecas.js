import axios from "axios";
export default {
    state: {
        ecas_details: [],
    },
    mutations:{
        SET_ECAS_DETAILS(state, ecas){
            state.ecas_details = ecas;
        }
    },
    actions: {
        async loadEcasDetails({commit}, id){
            return new Promise((resolve, reject) =>{
                axios   
                    .get(`ecas/load-ecas-with-status/${id}`)
                    .then(function(response){
                        console.log(response);
                        commit("SET_ECAS_DETAILS", response.data);
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
            });
        }
    },
    getters: {
        getEcasDetails: (state) => state.ecas_details,
    }
}