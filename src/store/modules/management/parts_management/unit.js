import axios from "axios";
export default {
    state: {
		management_unit: [],
		management_unit_specific: '',
    },
    mutations: {
        SET_MANAGENT_UNIT(state, unit) {
			state.management_unit = unit;
		},
		SET_MANAGENT_SPECIFIC(state, unit) {
			state.management_unit = unit;
		},
    },
    actions: {

		//save
		async insertUnit(state, payload) {
			// console.log(payload);
			return new Promise((resolve, reject) => {
				axios
					.post("units", payload)
					.then(function(response) {
						// console.log(response);
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},

		//delete
		async deleteUnit(state, id) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`units/${id}`)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},

		//update
		async updateUnit(state, payload) {
			return new Promise((resolve, reject) => {
				payload["formData"].append("_method", "PATCH");
				axios
					.post(
						`units/${payload["id"]}`,
						payload["formData"]
					)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},
		
		//load
        async loadUnit({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("units")
					.then(function(response) {
						// console.log(response)
						commit("SET_MANAGENT_UNIT", response.data);
						let result = {
							code: response.data.code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data,
						};
						// console.log(result);
						resolve(result);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},

		//load per model
		async loadUnitPerModel({ commit }, id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`units-load/${id}`)
					.then(function(response) {
						commit("SET_MANAGENT_SPECIFIC", response.data);
						// console.log(response);
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
		},
    },
    getters: {
        getUnit: (state) => state.management_unit,
    },
};
