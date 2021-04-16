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
        async loadRoles({ commit }) {
            
			return new Promise((resolve, reject) => {
				axios
					.get(`system-roles`)
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
		async insertUser(state, form_data) {
			return new Promise((resolve, reject) => {
				axios
					.post("users", form_data)
					.then(function(response){
						console.log(response);
						resolve(response);
					})
					.catch(function(error){
						reject(error.response);
					});
			})
		}
    },
    getters:{
        getEmployees: (state) => state.load_employees,
        getRoles: (state) => state.load_roles,
    }
}
