import axios from "axios";

export default{
    state:{
        load_unit_revision: [],
		load_simultaneous_app: [],
        load_simultaneous_details: [],
		// load_specific_id: []
    },
    mutations:{
		SET_UNIT_REVISION(state, load_unit_revision) {
			state.load_unit_revision = load_unit_revision;
        },
        SET_SIMULTANEOUS(state, load_simultaneous_app) {
			state.load_simultaneous_app = load_simultaneous_app;
        },
		SET_SIMULTANEOUS_DETAILS(state, load_simultaneous_details) {
			state.load_simultaneous_details = load_simultaneous_details;
        },
        // SET_CONTENTS(state, load_contents) {
		// 	state.load_contents = load_contents;
        // },
		// SET_SPECIFIC_ID(state, load_specific_id) {
		// 	state.load_specific_id = load_specific_id;
        // },
    },
    actions:{      
        async loadUnitRevision({commit}, payload) {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get("unit-rev-application/load-eco-parts"
                    ,{params:payload})
                    .then(function(response)
                    {
                        commit("SET_UNIT_REVISION", response);
                        let result = 
                        {
                            code: response.data.status_code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data
                        };
                        resolve(result);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            });
        },
		async loadSimultaneousApplication({commit}, payload) {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get("unit-rev-application/load-simultaneous-eco-number"
                    ,{params:payload})
                    .then(function(response)
                    {
                        commit("SET_SIMULTANEOUS", response);
                        let result = 
                        {
                            code: response.data.status_code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data
                        };
                        resolve(result);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            });
        },
        async loadSimultaneousDetails({ commit },eco_number) {
			return new Promise((resolve, reject) => {
				axios
					.get(`unit-rev-application/load-simultaneous-part-number/${eco_number}`)
					.then(function(response) {
                        commit("SET_SIMULTANEOUS_DETAILS", response.data);
						
						let result = {
							code: response.status_code,
							status: response.status,
							message: response.message,
							data: response.data,
						};
						
                        resolve(result);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
		// async loadSpecificID({ commit },id) {
		// 	return new Promise((resolve, reject) => {
		// 		axios
		// 			.get(`process-monitoring/${id}`)
		// 			.then(function(response) {
        //                 commit("SET_SPECIFIC_ID", response.data);
		// 				// console.log(response);
		// 				let result = {
		// 					code: response.data.status_code,
		// 					status: response.data.status,
		// 					message: response.data.message,
		// 					data: response.data.data,
		// 				};
						
        //                 resolve(result);
		// 			})
		// 			.catch(function(error) {
		// 				reject(error);
		// 			});
		// 	});
        // },
		// async updateProcess(state, payload) {
		// 	return new Promise((resolve, reject) => {
		// 		// payload["formData"].append("_method", "PATCH");
		// 		axios
		// 			.patch(
		// 				`process-monitoring/${payload["id"]}`,
		// 				payload
		// 			)
		// 			.then(function(response) {
		// 				resolve(response);
		// 			})
		// 			.catch(function(error) {
		// 				reject(error.response);
		// 			});
		// 	});
		// },
    },
    getters:{
       getUnitRev: (state)=> state.load_unit_revision
    }
}
