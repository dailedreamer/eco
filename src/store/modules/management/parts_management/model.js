import axios from "axios";
export default {
    state: {
		management_model: [],
		mangement_model_specific: '',
    },
    mutations: {
		SET_MANAGEMENT_MODEL(state, model) {
			state.management_model = model;
		},
		SET_MANAGEMENT_MODEL_SPECIFIC(state, model) {
			state.mangement_model_specific = model;
        },
    },
    actions: {
		
		//load
        async loadModel({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("model-names")
					.then(function(response) {
						commit("SET_MANAGEMENT_MODEL", response.data);
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

		//load per device
		async loadModelPerDevice({ commit }, id) {
			console.log(id);
			return new Promise((resolve, reject) => {
				axios
					.get(`model-name-load/${id}`)
					.then(function(response) {
						commit("SET_MANAGEMENT_MODEL_SPECIFIC", response.data);
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

		//delete
		async deleteDevice(state, id) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`devices/${id}`)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
		},

		//save
		async insertModel(state, payload) {
			return new Promise((resolve, reject) => {
				axios
					.post("model-names", payload)
					.then(function(response) {
						console.log(response);
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},
		
		//update
		async updateModel(state, payload) {
			return new Promise((resolve, reject) => {
				payload["formData"].append("_method", "PATCH");
				axios
					.post(
						`model-names/${payload["id"]}`,
						payload["formData"]
					)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
		},
    },
    getters: {
        getModel: (state) => state.management_model,
    },
};
