import axios from "axios";
export default {
    state: {
		device: [],
        model: [],
        unit: [],
    },
    mutations: {
		SET_DEVICE(state, device) {
			state.device = device;
		},
		SET_MODEL(state, model) {
			state.model = model;
        },
        SET_UNIT(state, unit) {
			state.unit = unit;
		},
    },
    actions: {
        async loadDevice({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("devices")
					.then(function(response) {
						commit("SET_DEVICE", response);
						let result = {
							code: response.data.status_code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data
						};
						resolve(result);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
        
        async loadModel({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("model-names")
					.then(function(response) {
						
						commit("SET_MODEL", response.data);
						let result = {
							code: response.data.status_code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data
						};
						resolve(result);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        }
    //     async loadUnit({ commit }) {
	// 		return new Promise((resolve, reject) => {
	// 			axios
	// 				.get("model-names")
	// 				.then(function(response) {
	// 					commit("SET_UNIT", response.data);
	// 					let result = {
	// 						code: response.data.code,
	// 						status: response.data.status,
	// 						message: response.data.message,
	// 						data: response.data.data,
	// 					};
	// 					resolve(result);
						
	// 				})
	// 				.catch(function(error) {
	// 					reject(error);
	// 				});
	// 		});
	// 	},
    },
    getters: {
        getDevice: (state) => state.device,
        getModel: (state) => state.model,
        // getUnit: (state) => state.unit,
    },
};
