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
        async uploadPartsRegistrationUnit(state, payload){
            return new Promise((resolve, reject) => {
                axios   
                    .post(`units-pe/file-upload/${payload[1]}`, payload[0], {
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

        // async uploadExcel(state, payload)
        // {
        //     return new Promise((resolve, reject) => {
		// 		axios
		// 			.post("http://localhost/laravel_training01/public/api/testing", payload, {
		// 				headers: {
		// 					"Content-Type": "multipart/form-data",
		// 				},
		// 			})
		// 			.then(function(response) {
		// 				resolve(response);
        //                 console.log('this is the payload; -> ');
        //                 console.log(payload);					
        //             })
		// 			.catch(function(error) {
		// 				reject(error);
		// 			});
		// 	});
        // },
        // async insertPartsRegistrationPe(state, payload)
        // {
        //     return new Promise((resolve, reject) => {
        //         axios
		// 			.post("http://localhost/laravel_training01/public/api/testing", payload, {
		// 				headers: {
		// 					"Content-Type": "multipart/form-data",
		// 				},
		// 			})
		// 			.then(function(response) {
		// 				resolve(response);
        //                 console.log('this is the payload; -> ');
        //                 console.log(payload);					
        //             })
		// 			.catch(function(error) {
		// 				reject(error);
		// 			});
        //     });
        // }
   },
   getters:{

   },
};