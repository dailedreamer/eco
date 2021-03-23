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
        async loadUnit({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("units")
					.then(function(response) {
						commit("SET_MANAGENT_UNIT", response.data);
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

		//load per model
		async loadUnitPerModel({ commit }, id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`units-load/${id}`)
					.then(function(response) {
						commit("SET_MANAGENT_UNIT", response.data);
						console.log(response);
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
        getUnit: (state) => state.management_unit,
    },
};
