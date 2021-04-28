import axios from "axios";

export default{
    state:{
        load_employees: [],
		load_roles: [],
		load_system_users: []
    },
    mutations:{
        SET_EMPLOYEES(state, employees) {
			state.load_employees = employees;
        },
        SET_ROLES(state, roles){
            state.load_roles = roles;
		},
		SET_SYSTEM_USERS(state, system_users){
			state.load_system_users = system_users;
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
		},
		async loadSystemUsers({ commit }) {
            
			return new Promise((resolve, reject) => {
				axios
					.get(`system-users`)
					.then(function(response) {
                        commit("SET_SYSTEM_USERS", response.data);
                        // console.log(response);
						let result = {
							code: response.data.status_code,
							status: response.data.status,
							message: response.data.message,
							data: response.data.data,
						};
						resolve(result);
						console.log(result);
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
		getUsers: (state) => state.load_system_users
    }
}
