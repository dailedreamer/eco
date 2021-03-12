import axios from "axios";
export default {
    state: {
        model: [],
    },
    mutations: {
		SET_MODEL(state, model) {
			state.model = model;
        },
    },
    actions: {
        async loadModel({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("model-names")
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
    },
    getters: {
        getModel: (state) => state.model,
    },
};
