import axios from "axios";
export default {
    state: {
		management_device: [],
    },
    mutations: {
		SET_MANAGEMENT_DEVICE(state, device) {
			state.management_device = device;
		},
    },
    actions: {
        async loadDevice({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("devices")
					.then(function(response) {
						commit("SET_MANAGEMENT_DEVICE", response.data);
						let result = {
							code: response.data.status_code,
							status: response.data.status,
							message: response.data.message,
							data: response.data,
						};
						resolve(result);
					})
					.catch(function(error) {
						reject(error);
					});
			});
		},

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
  
		async updateDevice(state, payload) {
			return new Promise((resolve, reject) => {
				payload["formData"].append("_method", "PATCH");
				axios
					.post(
						`devices/${payload["id"]}`,
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
		async insertDevice(state, payload) {
			return new Promise((resolve, reject) => {
				axios
					.post("devices", payload)
					.then(function(response) {
						console.log(response);
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
        },
        
    },
    getters: {
        getDevice: (state) => state.management_device,
    },
};
