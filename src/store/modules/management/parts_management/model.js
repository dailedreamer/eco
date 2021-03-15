import axios from "axios";
export default {
    state: {
        management_model: [],
    },
    mutations: {
		SET_MANAGEMENT_MODEL(state, model) {
			state.management_model = model;
        },
    },
    actions: {
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
    },
    getters: {
        getModel: (state) => state.management_model,
    },
};
