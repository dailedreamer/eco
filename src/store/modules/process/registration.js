import axios from "axios";

export default {
    state: {
        load_all_process: [],
    },
    mutations: {
        SET_ALL_PROCESS(state, load_all_process)
        {
            state.load_all_process = load_all_process;
        }
    },
    actions:{
        async uploadFile(state, payload) {
            return new Promise((resolve, reject) => {
                axios   
                    .post(`process/file-upload/${payload[1]}`, payload[0], {
                        header: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then(function(response) {
                        resolve(response);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            });
        },
        async loadAllProcess({commit})
        {
            return new Promise((resolve, reject) =>
            {
                axios   
                    .get("process")
                    .then(function(response)
                    {
                        commit("SET_ALL_PROCESS", response.data);
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
            });
        },
        async updateProcessRegistration(state, payload)
        {
            return new Promise((resolve, reject) =>
            {
                axios   
                    .patch("update-process-details", payload)
                    .then(function(response) 
                    {
                        resolve(response);
                    })
                    .catch(function(error){
                        reject(error);
                    });
            })
        }
    },
    getters: {
        getAllProcess: state => state.load_all_process
    },
}