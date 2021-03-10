import axios from "axios";
export default {
    state: {
		device: [],
        parts: [],
        list: [],
    },
    mutations: {
		SET_DEVICE(state, device) {
			state.device = device;
		},
		SET_MODEL(state, parts) {
			state.parts = parts;
        },
        SET_UNIT(state, unit) {
			state.list = unit;
		},
    },
    actions: {
        async loadDevice({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("load-all-device")
					.then(function(response) {
						commit("SET_DEVICE", response.data);
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
        
        async loadModel({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("load-all-model")
					.then(function(response) {
						commit("SET_MODEL", response.data);
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
        async loadUnit({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("load-all-unit")
					.then(function(response) {
						commit("SET_UNIT", response.data);
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
        getDevice: (state) => state.device,
        getModel: (state) => state.model,
        getUnit: (state) => state.unit,
    },
};
