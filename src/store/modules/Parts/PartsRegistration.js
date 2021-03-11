import axios from "axios";

export default {
    //properties
    //Reusable Data
   state:{

   },
   //setter of state
   mutations:{

   },
   //composed pf all methods and call the mutation
   actions:
   {
        async uploadExcel(state, payload)
        {
            return new Promise((resolve, reject) => {
				axios
					.post("http://localhost/laravel_training01/public/api/testing", payload, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then(function(response) {
						resolve(response);
                        console.log('this is the payload; -> ');
                        console.log(payload);					
                    })
					.catch(function(error) {
						reject(error);
					});
			});
        },
        async insertPartsRegistrationPe(state, payload)
        {
            return new Promise((resolve, reject) => {
                axios
					.post("http://localhost/laravel_training01/public/api/testing", payload, {
						headers: {
							"Content-Type": "multipart/form-data",
						},
					})
					.then(function(response) {
						resolve(response);
                        console.log('this is the payload; -> ');
                        console.log(payload);					
                    })
					.catch(function(error) {
						reject(error);
					});
            });
        }
   },
   getters:{

   },
};