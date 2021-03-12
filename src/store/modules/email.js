import axios from "axios";

export default{
    state:{

    },
    mutations:{

    },
    actions:{
        async loadEmailMasterlist(){
            return new Promise((resolve, reject) => {
                axios
                    // .get("email-masterlist")
                    .get('http://10.164.58.63/training3/public/api/employee')
                    .then(function(response){
                        let result = {
                            // code: response.data.code,
                            status: response.data.status,
                            message: response.data.message,
                            data: response.data.data,
                        };
                        resolve(result);  
                    })
                    .catch(function(error){
                        reject(error);
                        // console.log(error)
                    });
            })
        },
        async loadSection(){
            return new Promise((resolve, reject) =>{
                axios
                    // .get("email-details")
                    .get('http://10.164.58.63/training3/public/api/employee')
                    .then(function(response){
                         let result = {
                            // code: response.data.code,
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
                    // .get("email-details")
                    .get('http://10.164.58.63/training3/public/api/employee')
                    .then(function(response){
                        let result = {
                            // code: response.data.code,
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
        }

    },
    getters:{

    }
}
