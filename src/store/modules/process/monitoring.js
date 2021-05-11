import axios from "axios";

export default{
    state:{
        load_percentage: [],
        load_contents: [],
		load_specific_id: []
    },
    mutations:{
        SET_PERCENTAGE(state, load_percentage) {
			state.load_percentage = load_percentage;
        },
        SET_CONTENTS(state, load_contents) {
			state.load_contents = load_contents;
        },
		SET_SPECIFIC_ID(state, load_specific_id) {
			state.load_specific_id = load_specific_id;
        },
    },
    actions:{      
        async loadPercentage({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("load-process-monitoring-percentage-count")
					.then(function(response) {
                        commit("SET_PERCENTAGE", response.data);
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
        async loadContents({ commit },content) {
			return new Promise((resolve, reject) => {
				axios
					.get(`load-process-monitoring/${content}`)
					.then(function(response) {
                        commit("SET_CONTENTS", response.data);
						
						let result = {
							code: response.status_code,
							status: response.status,
							message: response.message,
							data: response.data,
						};
						
                        resolve(result);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
		async loadSpecificID({ commit },id) {
			return new Promise((resolve, reject) => {
				axios
					.get(`process-monitoring/${id}`)
					.then(function(response) {
                        commit("SET_SPECIFIC_ID", response.data);
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
		async updateProcess(state, payload) {
			return new Promise((resolve, reject) => {
				// payload["formData"].append("_method", "PATCH");
				axios
					.patch(
						`process-monitoring/${payload["id"]}`,
						payload
					)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error.response);
					});
			});
		},
    },
    getters:{
       
    }
}
