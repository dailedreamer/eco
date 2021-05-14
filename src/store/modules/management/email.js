import axios from "axios";

export default{
    state:{
        management_email: [],
    },
    mutations:{
        SET_EMAIL(state, email){
            state.management_email = email;
        }
    },
    actions:{
        async loadEmailMasterlist({commit}){
            return new Promise((resolve, reject) => {
                axios
                    .get("email")
                    .then(function(response){
                        commit("SET_EMAIL", response.data);
                        let result = {
                            code: response.data.status_code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data,
                        };
                        resolve(result); 
                    })
                    .catch(function(error){
                        reject(error);
                    });
            })
        },
        async loadSection(){
            return new Promise((resolve, reject) =>{
                axios
                    .get("sections")
                    .then(function(response){
                        
                         let result = {
                            code: response.data.status_code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data,
                        };
                        resolve(result); 
                    })
                    .catch(function(error){
                        reject(error);
                    })
            })
        },
        async loadEmployee(){
            return new Promise((resolve, reject) =>{
                axios   
                    .get("portal-users")
                    .then(function(response){
                        let result = {
                            code: response.data.status_code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data,
                        };
                        resolve(result);   
                    })
                    .catch(function(error){
                        reject(error);
                    })
            })
        },
        async updateEmail(state, payload){
            return new Promise((resolve, reject) => {
                payload["formData"].append("_method", "PATCH");
                axios
                    .post(`email/${payload["id"]}`,  payload["formData"])
                    .then(function(response){
                        resolve(response)
                    })
                    .catch(function(error) {
						reject(error.response);
					});
            });
        },

    },
    getters: {
        getEmail: (state) => state.management_email,
    },
};
