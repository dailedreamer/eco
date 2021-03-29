import axios from "axios";

export default{
    state:{
        load_employees: [],
        load_roles: [],
    },
    mutations:{
        SET_EMPLOYEES(state, employees) {
			state.load_employees = employees;
        },
        SET_ROLES(state, roles){
            state.load_roles = roles;
        }
    },
    actions:{      
        async loadEmployees({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("portal-users")
					.then(function(response) {
                        commit("SET_EMPLOYEES", response.data);
                        // console.log(response);
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
        async loadRoles({ commit }, system_id) {
            console.log(system_id);
			return new Promise((resolve, reject) => {
				axios
					.get(`system-roles/${system_id}`)
					.then(function(response) {
                        commit("SET_ROLES", response.data);
                        console.log(response);
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
    },
    getters:{
        getEmployees: (state) => state.load_employees,
        getRoles: (state) => state.load_roles,
    }
}
