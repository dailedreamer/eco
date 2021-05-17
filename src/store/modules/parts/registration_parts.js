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
      }
  },
  getters: {
    
  }
}
