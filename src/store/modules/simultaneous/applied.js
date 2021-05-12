import axios from "axios";

export default {
    state:{
        load_all_applied: [],
    },

    mutations:{
        SET_ALL_APPLIED(state, load_all_applied) 
        {
            state.load_all_applied = load_all_applied;
        },
    },

    actions:{
        async loadSimultaneousApplied({ commit }, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get(`simultaneous-application/load-simultaneous/${payload}`)
                    .then(function(response) 
                    {
                        commit("SET_ALL_APPLIED", response.data);
                        let result = 
                        {
                            code: response.data.code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data
                        };
                        resolve(result);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            })
        },
        async removeSimultaneous(state, id)
        {
            return new Promise((resolve, reject) => {
				axios
					.delete(`simultaneous/${id}`)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        }
    },

    getters:{
        getAllApplied: state => state.load_all_applied,
    }
}