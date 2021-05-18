import axios from "axios";

export default {
    state: {
        load_all_unit_rev: [],
    },

    mutations: {
        SET_ALL_UNIT_REV(state, load_all_unit_rev) 
        {
            state.load_all_unit_rev = load_all_unit_rev;
        },
    }, 

    actions: {
        async removeUnitRev(state, id)
        {
            console.log(id)
            return new Promise((resolve, reject) => {
				axios
					.delete(`unit-revision/delete-unit-revision/${id}`)
					.then(function(response) {
						resolve(response);
					})
					.catch(function(error) {
						reject(error);
					});
			});
        },
        async load_percentage_unit_rev(state, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get("unit-rev-application/load-unit-rev-percentage-count", payload)
                    .then(function(response)
                    {
                        resolve(response);
                    })
                    .catch(function(error) {
						reject(error);
					});
            })
        },
        async loadUnitRev({ commit }, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios
                    .get(`unit-rev-application/load-with-unit-rev/${payload}`)
                    .then(function(response) 
                    {
                        commit("SET_ALL_UNIT_REV", response.data);
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
    },

    getters: {
        getAllUnitRev: state => state.load_all_unit_rev,
    }
}