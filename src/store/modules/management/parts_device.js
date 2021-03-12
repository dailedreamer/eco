import axios from "axios";
export default {
    state: {
		device: [],
    },
    mutations: {
		SET_DEVICE(state, device) {
			state.device = device;
		},
    },
    actions: {
        async loadDevice({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("devices")
					.then(function(response) {
						console.log(response);
						commit("SET_DEVICE", response.data);
						let result = {
							code: response.data.status_code,
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
  
		async insertDevice(state, payload) {
			// console.log(payload);
			return new Promise((resolve, reject) => {
				axios
					.post("devices", payload)
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
        getDevice: (state) => state.device,
    },
};
