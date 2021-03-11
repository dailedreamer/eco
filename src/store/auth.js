import portalAxios from "../template/assets/axios";

export default {
	state: {
        user_info: [],
        token: '',
	},
	mutations: {
		SET_USER_INFO(state, user_info) {
			state.user_info = user_info;
        },
        SET_TOKEN(state, token) {
			state.token = token;
		},
	},
	actions: {
		async loadUserInfo({ commit }, token) {
			return new Promise((resolve, reject) => {
				portalAxios
					.get(`/token/get/${token}`)
					.then(function(response) {
                        commit("SET_USER_INFO", response.data);
						commit("SET_TOKEN", token);
						// console.log(token);
						let result = {
							code: response.data.code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data,
						};
						resolve(result);
						if(localStorage.getItem('user_info') === null)
						{
							localStorage.setItem('user_info', JSON.stringify(response.data));
							localStorage.setItem('auth_token', token);
						}
					})
					.catch(function(error) {
						reject(error);
					});
			});
		},
	},
	getters: {
        getUserInfo: (state) => state.user_info,
        getToken: (state) => state.token,
	},
};
