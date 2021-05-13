import axios from "axios";
export default {

    state: {
        vps_data: [],
    },
    mutations: {
        SET_VPS_DATA(state, vpsdata) {
            state.vps_data = vpsdata;
        },

    },
    actions: {
        //loadvpsdata
        async loadVpsData({ commit}, id) {
            
			return new Promise((resolve, reject) => {
				axios
					.get(`vps-data/load-all-vps-data/${id}`)
					.then(function(response) {
						commit("SET_VPS_DATA", response.data);
						let result = {
							code: response.data.status_code,
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
        getVps: (state) => state.vps_data,
    },
}