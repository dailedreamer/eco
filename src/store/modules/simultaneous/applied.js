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
        },
        async loadEcoParts(state, payload)
        {
            return new Promise((resolve, reject) => {
				axios
					.get(`simultaneous-application/load-eco-parts`, {params: payload})
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
        async loadEcoProcess(state, payload)
        {
            return new Promise((resolve, reject) => 
            {
				axios
					.get(`simultaneous-application/load-eco-process`, {params: payload})
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
        async load_percentage(state, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get("simultaneous-application/load-simultaneous-percentage-count", payload)
                    .then(function(response)
                    {
                        resolve(response);
                    })
                    .catch(function(error) {
						reject(error);
					});
            })
        },
        async cancelledSimultaneous(state, id)
        {
            return new Promise((resolve, reject) =>
            {
                axios   
                    .patch(`simultaneous-application/cancel-specific-simultaneous-application/${id}`)
                    .then(function(response)
                    {
                        resolve(response);
                    })
                    .catch(function(error)
                    {
                        reject(error);
                    })
            })
        },
        async updateSimultaneousApplication(state, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .patch(`simultaneous/${payload[1]}`, payload[0])
                    .then(function(response)
                    {
                        resolve(response);
                    })
                    .catch(function(error)
                    {
                        reject(error);
                    })
            })
        },
        async addSimultaneous(state, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .post("simultaneous", payload)
                    .then(function(response)
                    {
                        resolve(response);
                    })
                    .catch(function(error)
                    {
                        reject(error);
                    })
            })
        }
    },

    getters:{
        getAllApplied: state => state.load_all_applied,
    }
}