import axios from "axios";

export default{
    state:{
        load_unit_revision: [],
		load_simultaneous_app: [],
        load_simultaneous_details: [],
		load_update_revision: [],
        load_edit_revision:[]
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
        SET_UPDATE_REVISION(state, load_update_revision) {
			state.load_update_revision = load_update_revision;
        },
        SET_EDIT_REVISION(state, load_edit_revision) {
			state.load_edit_revision = load_edit_revision;
        },
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
        async addRevisionUp(state, payload) {
			// console.log(payload);
			return new Promise((resolve, reject) => {
				axios
					.post("unit-rev", payload)
					.then(function(response) {
						// console.log(response);
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},
        async loadUpdateRevision({ commit },id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`unit-rev-application/show-unit-revision/${id}`)
					.then(function(response) {
                        commit("SET_UPDATE_REVISION", response.data);
					
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
        async UpdateUnitRevisionUp(state, payload) {
			// console.log(payload);
			return new Promise((resolve, reject) => {
				// payload["formData"].append("_method", "PATCH");
				axios
					.patch(
						`unit-rev-application/update-unit-revision/${payload["id"]}`,
                        payload
                    )
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},
        async loadEditRevision({ commit },id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`unit-rev/${id}`)
					.then(function(response) {
                        commit("SET_EDIT_REVISION", response.data);
                        // console.log(response.data);
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
		
    },
    getters:{
       getUnitRev: (state)=> state.load_unit_revision,
	   getUnitRevEdit: (state) => state.load_edit_revision
    }
}
