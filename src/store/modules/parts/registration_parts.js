import axios from "axios";

// import axios from "axios";
export default {
  state: {
    parts_registration_units:[],
  },
  mutations: {

  },
  actions: {
      async uploadPartsRegistrationParts(state, payload){
        return new Promise((resolve, reject)=>{
          axios
            .post(`parts-pe/file-upload/${payload[1]}`, payload[0], {
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
        }) 
      },

      async savePartsRegistrationParts(state, payload){
        return new Promise((resolve, reject) =>{
          axios 
            .post("parts-details", payload)
            .then(function(response){
              resolve(response);
            })
            .catch(function(error) {
              reject(error.response);
            });
        })
      },

      async loadSpecificDeviceName(state, payload){
        return new Promise((resolve, reject) =>{
          axios 
            .get(`get-device-name/${payload}`)
            .then(function(response){
              resolve(response);
            })
            .catch(function(error) {
              reject(error.response);
            });
        })
      },

      async loadSpecificModelName(state, payload){
        return new Promise((resolve, reject) =>{
          axios 
            .get(`get-model-name/${payload}`)
            .then(function(response){
              resolve(response);
            })
            .catch(function(error) {
              reject(error.response);
            });
        })
      }
  },
  getters: {

  }
}
