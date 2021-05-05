import axios from "axios";

export default{
    state:{
        load_percentage: [],
        load_contents: [],
    },
    mutations:{
        SET_PERCENTAGE(state, load_percentage) {
			state.load_percentage = load_percentage;
        },
        SET_CONTENTS(state, load_contents) {
			state.load_contents = load_contents;
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
       
    }
}
