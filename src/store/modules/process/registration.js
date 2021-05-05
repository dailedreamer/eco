import axios from "axios";

export default {
    state: {

    },
    mutations: {

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
    },
    getters: {

    },
}